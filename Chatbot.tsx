import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Sparkles, RefreshCw, SendHorizontal, HeartHandshake, X, Loader2 } from 'lucide-react';
import { PRESET_QUESTIONS } from '../data/faqData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

interface ChatHistoryItem {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Grace and peace to you! Welcome to St John's Anglican Church, Odobi Okemesi Ekiti. I am St John's Assistant powered by Google Gemini AI. How may I assist you with Bible, prayer, Anglican doctrine, or church questions today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [prayerRequestMode, setPrayerRequestForm] = useState(false);
  const [prayerText, setPrayerText] = useState('');
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, prayerRequestMode, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: time
    };

    // Construct conversation history for Gemini API
    const history: ChatHistoryItem[] = messages
      .filter(m => m.id !== 'welcome-1' && m.id !== 'welcome-reset')
      .map(m => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history })
      });

      const data = await response.json();
      const botText = data.reply || "I’m St John's Assistant. I can help with Bible, prayer, and church questions. For other matters, please contact the Vicar at +2347062676430";

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error('Error sending message:', err);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: "I’m St John's Assistant. I can help with Bible, prayer, and church questions. For other matters, please contact the Vicar at +2347062676430",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerText.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: `[Prayer Request]: ${prayerText}`,
      timestamp: time
    };

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: "Amen! Your prayer request has been received. Our clergy and prayer ministry will join you in prayers. 'The effectual fervent prayer of a righteous man availeth much' (James 5:16). God bless you!",
      timestamp: time
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setPrayerText('');
    setPrayerRequestForm(false);
    setPrayerSubmitted(true);
    setTimeout(() => setPrayerSubmitted(false), 4000);
  };

  const handleClear = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: "Chat history cleared. How may I assist you with Bible, prayer, Anglican doctrine, or church questions?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <>
      {/* Floating Action Trigger Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-anglican-blue-dark via-anglican-blue to-anglican-blue-dark text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-anglican-gold focus:outline-none"
            aria-label="Open St John's Assistant Chatbot"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-anglican-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-anglican-gold"></span>
            </span>

            <div className="p-1.5 bg-anglican-gold text-anglican-blue-dark rounded-full font-bold">
              <Bot className="w-5 h-5" />
            </div>

            <span className="font-semibold text-sm pr-1 text-amber-100 hidden sm:inline">
              St John's Assistant
            </span>
          </button>
        )}
      </div>

      {/* Chat Window Modal (Responsive for Mobile and Desktop) */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 z-50 w-full sm:w-[420px] h-full sm:h-[600px] bg-white sm:rounded-3xl shadow-2xl border border-anglican-gold/40 flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-anglican-blue-dark via-anglican-blue to-anglican-blue-dark text-white p-4 flex items-center justify-between border-b border-anglican-gold/40">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-anglican-gold to-amber-600 flex items-center justify-center text-anglican-blue-dark font-bold shadow">
                  <Bot className="w-6 h-6 text-anglican-blue-dark" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-anglican-blue-dark rounded-full"></span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white leading-tight">
                  St John's Assistant
                </h3>
                <span className="text-xs text-anglican-gold font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Gemini AI Powered
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleClear}
                type="button"
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition"
                title="Clear Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Bar */}
          <div className="bg-amber-50 border-b border-amber-200/80 px-4 py-2 text-[11px] text-anglican-blue-dark font-medium flex items-center justify-between">
            <span>✝️ Church Info, Bible & Counseling</span>
            <button
              onClick={() => setPrayerRequestForm(!prayerRequestMode)}
              className="text-anglican-blue hover:underline font-bold text-[11px] flex items-center gap-1"
            >
              <HeartHandshake className="w-3 h-3 text-anglican-gold" /> Pray With Us
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${
                  msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    msg.sender === 'user'
                      ? 'bg-anglican-gold text-anglican-blue-dark'
                      : 'bg-anglican-blue text-anglican-gold'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-anglican-blue text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-1.5 text-right ${
                      msg.sender === 'user' ? 'text-amber-200' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Thinking / Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-anglican-blue text-anglican-gold flex items-center justify-center shrink-0 text-xs font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200/80 rounded-2xl rounded-tl-none px-4 py-3 text-xs text-slate-500 flex items-center gap-2 shadow-xs">
                  <Loader2 className="w-4 h-4 animate-spin text-anglican-gold" />
                  <span>St John's Assistant is reflecting...</span>
                </div>
              </div>
            )}

            {/* In-Chat Prayer Request Inline Form */}
            {prayerRequestMode && (
              <div className="bg-white p-4 rounded-2xl border-2 border-anglican-gold/60 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-xs text-anglican-blue-dark uppercase tracking-wider flex items-center gap-1">
                    <HeartHandshake className="w-4 h-4 text-anglican-gold" /> Submit Prayer Request
                  </h4>
                  <button
                    onClick={() => setPrayerRequestForm(false)}
                    className="text-slate-400 hover:text-slate-600 text-xs"
                  >
                    Cancel
                  </button>
                </div>
                <form onSubmit={handlePrayerSubmit} className="space-y-2">
                  <textarea
                    rows={3}
                    required
                    value={prayerText}
                    onChange={(e) => setPrayerText(e.target.value)}
                    placeholder="Type your prayer request here..."
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-1 focus:ring-anglican-blue outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-2 bg-anglican-gold text-anglican-blue-dark font-bold text-xs rounded-xl hover:brightness-105"
                  >
                    Send Prayer Request
                  </button>
                </form>
              </div>
            )}

            {prayerSubmitted && (
              <div className="bg-emerald-50 text-emerald-800 text-xs p-3 rounded-xl border border-emerald-200 text-center font-medium">
                🙏 Prayer Request Received! God bless you.
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Preset Suggestion Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-bold text-slate-400 shrink-0 uppercase">Ask:</span>
            {PRESET_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={isLoading}
                className="shrink-0 px-2.5 py-1 bg-anglican-blue-subtle text-anglican-blue text-[11px] font-medium rounded-full hover:bg-anglican-gold hover:text-anglican-blue-dark transition disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              placeholder="Ask about Bible, prayer, church info..."
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-100 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-anglican-blue focus:bg-white transition disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 bg-gradient-to-r from-anglican-gold to-amber-500 text-anglican-blue-dark rounded-full shadow hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <SendHorizontal className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
