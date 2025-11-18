import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { PORTFOLIO_CONTEXT } from '../constants';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chat) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: PORTFOLIO_CONTEXT,
          },
        });
        setChat(newChat);
         setMessages([{ role: 'model', text: "Hello! I'm Om's AI assistant. How can I help you today?" }]);
      } catch (error) {
        console.error("Failed to initialize Gemini:", error);
        setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
      }
    }
  }, [isOpen, chat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: input });
      const modelMessage: ChatMessage = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: 'Oops! Something went wrong. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-cyan-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-3xl z-50 transform hover:scale-110 transition-transform"
        aria-label="Toggle chatbot"
      >
        {isOpen ? '✕' : '💬'}
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-700">
          <header className="p-4 bg-gray-800/50 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white text-center">AI Assistant</h3>
          </header>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex flex-col space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-cyan-600 text-white rounded-br-none'
                        : 'bg-gray-700 text-gray-200 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-none">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                        </div>
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-4 bg-gray-800/50 border-t border-gray-700">
            <div className="flex items-center bg-gray-700 rounded-full">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about my projects..."
                className="w-full bg-transparent px-4 py-2 text-gray-200 focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-cyan-500 text-white p-2 rounded-full m-1 hover:bg-cyan-600 disabled:bg-gray-500"
                disabled={isLoading || !input.trim()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
