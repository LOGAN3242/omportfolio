import { GoogleGenAI } from '@google/genai';
import { PORTFOLIO_CONTEXT } from '../../constants';

type Msg = { role: 'user' | 'model'; text: string };

const MAX_MESSAGES = 10;
const MAX_CHARS = 500;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export default async (req: Request) => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return json(500, { error: 'Chat is not configured' });

  let messages: Msg[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return json(400, { error: 'Invalid JSON' });
  }

  // Keep requests small so the endpoint can't be used as a free general-purpose LLM
  const contents = messages
    .filter(m => (m.role === 'user' || m.role === 'model') && typeof m.text === 'string')
    .slice(-MAX_MESSAGES)
    .map(m => ({ role: m.role, parts: [{ text: m.text.slice(0, MAX_CHARS) }] }));

  if (!contents.length || contents[contents.length - 1].role !== 'user') {
    return json(400, { error: 'Last message must be from the user' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: { systemInstruction: PORTFOLIO_CONTEXT, maxOutputTokens: 400, temperature: 0.4 },
    });
    return json(200, { reply: result.text ?? '' });
  } catch (err) {
    console.error('Gemini error', err);
    return json(502, { error: 'Upstream error' });
  }
};
