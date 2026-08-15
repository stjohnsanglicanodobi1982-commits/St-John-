import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { faqData } from '../data/faqData';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Welcome to St John\'s Assistant! Ask me about service times, Vicar, Bishop, or anything.' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userMsg = input.toLowerCase();
    setInput('');
    setLoading(true);

    // 1. Check FAQ first
    let answer = Object.entries(faqData).find(([key]) => userMsg.includes(key.toLowerCase()))?.[1];

    // 2. If not found, call Gemini
    if (!answer) {
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ message: input })
        });
        const data = await res.json();
        answer = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't get an answer right now. Please try again.";
      } catch {
        answer = "Sorry, I'm offline right now. Please try again later.";
      }
    }

    setMessages(prev => [...prev, { role: 'bot', text: answer }]);
    setLoading(false);
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-5 right-5 bg-[#1B365D] hover:bg-[#0F2342] text-white p-4 rounded-full shadow-lg z-50">
        <MessageCircle size={24} />
      </button>
      {open && (
        <div className="fixed bottom-20 right-5 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border-2 border-[#D4AF37]">
          <div className="bg-[#1B365D] text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-bold font-[Cinzel]">St John's Assistant</h3>
            <button onClick={() => setOpen(false)}><X size={20} /></button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto font-[Inter]">
            {messages.map((m,i) => (
              <div key={i} className={`mb-3 ${m.role==='user'?'text-right':''}`}>
                <span className={`p-3 rounded-lg inline-block max-w-[80%] ${m.role==='user'?'bg-[#1B365D] text-white':'bg-gray-100 text-gray-800'}`}>
                  {m.text}
                </span>
              </div>
            ))}
            {loading && <p className="text-gray-500 text-sm">Typing...</p>}
          </div>
          <div className="p-3 border-t flex">
            <input
              value={input}
              onChange={e=>setInput(e.target.value)}
              onKeyPress={e=>e.key==='Enter'&&handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 border rounded-l-lg px-3 py-2 text-sm outline-none"
            />
            <button onClick={handleSend} className="bg-[#D4AF37] text-[#1B365D] px-4 rounded-r-lg">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
