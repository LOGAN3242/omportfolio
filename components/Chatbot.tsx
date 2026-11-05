import React, { useEffect, useRef, useState } from 'react';
import { CHAT_SUGGESTIONS, EMAIL } from '../constants';
import { ChatMessage } from '../types';
import { CloseIcon, SendIcon } from './Icons';

// The Gemini key lives only in the Netlify Function (netlify/functions/chat.ts).
const CHAT_ENDPOINT = '/.netlify/functions/chat';
const GREETING: ChatMessage = { role: 'model', text: "Hi! I'm Om's AI assistant. Ask me about his projects, skills or experience." };

const Orb: React.FC<{ size?: string }> = ({ size = 'w-11 h-11' }) => (
  <span className={`relative ${size} shrink-0`} aria-hidden="true">
    <span className="spin-4 absolute inset-0 rounded-full bg-[conic-gradient(#8b5cf6,#06b6d4,#a78bfa,#22d3ee,#8b5cf6)]" />
    <span className="absolute inset-[18%] rounded-full bg-[#0d1117]" />
    <span className="think absolute inset-[34%] rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
  </span>
);

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const send = async (text: string) => {
    const question = text.trim().slice(0, 500);
    if (!question || isLoading) return;

    const history = [...messages, { role: 'user', text: question } as ChatMessage];
    setMessages(history);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(1).slice(-10) }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { reply?: string } = await res.json();
      setMessages(prev => [...prev, { role: 'model', text: data.reply || 'Sorry, I could not answer that.' }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [
        ...prev,
        { role: 'model', text: `I'm having trouble connecting right now. You can reach Om directly at ${EMAIL}.` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={isOpen}
        className="fixed bottom-5 right-5 z-50 glassmorphism glow-pulse flex items-center gap-3 pl-2 pr-4 py-2 rounded-full text-sm font-semibold text-white"
      >
        {isOpen ? (
          <span className="w-11 h-11 flex items-center justify-center"><CloseIcon /></span>
        ) : (
          <Orb />
        )}
        <span className="hidden sm:inline">{isOpen ? 'Close' : "Ask Om's AI"}</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Om's AI assistant"
          className="fixed bottom-24 right-3 sm:right-5 z-50 w-[calc(100vw-24px)] max-w-[400px] h-[min(560px,70vh)] rounded-[22px] border border-white/10 bg-[#0d1117]/95 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden"
        >
          <header className="flex items-center gap-3.5 px-5 py-4 border-b border-white/[0.08]">
            <Orb size="w-10 h-10" />
            <span className="flex flex-col leading-snug">
              <span className="font-bold">Ask Om's AI</span>
              <span className="text-[13px] text-gray-400">Answers from his résumé and projects</span>
            </span>
          </header>

          <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 text-[15px]" aria-live="polite">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-4 py-2.5 whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'self-end bg-cyan-600 text-white rounded-[16px_16px_4px_16px]'
                    : 'self-start bg-gray-800 text-gray-200 rounded-[16px_16px_16px_4px]'
                }`}
              >
                {m.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-start flex gap-1.5 px-4 py-3 rounded-2xl bg-gray-800" aria-label="Thinking">
                {[0, 0.2, 0.4].map(d => (
                  <span key={d} className="think w-[7px] h-[7px] rounded-full bg-cyan-400" style={{ animationDelay: `${d}s` }} />
                ))}
              </div>
            )}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 mt-1">
                {CHAT_SUGGESTIONS.map((s, i) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className={`px-3.5 py-2 rounded-full border text-[13px] ${
                      i % 2 ? 'border-violet-500/45 bg-violet-500/10 text-violet-300' : 'border-cyan-500/45 bg-cyan-500/10 text-cyan-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2.5 px-5 py-4 border-t border-white/[0.08]"
          >
            <label htmlFor="chat-input" className="sr-only">Ask a question</label>
            <input
              id="chat-input"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about my projects…"
              maxLength={500}
              disabled={isLoading}
              className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-white/[0.12] bg-gray-900 text-gray-100 text-[15px] focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white flex items-center justify-center disabled:opacity-40"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
