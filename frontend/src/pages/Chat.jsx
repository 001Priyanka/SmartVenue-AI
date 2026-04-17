import { useState } from 'react';
import { SendIcon, BotIcon } from 'lucide-react';
import ChatBubble from '../components/ChatBubble';
import './Chat.css';

const dummyMessages = [
  { id: 1, text: "Hi! Welcome to SmartVenue AI. How can I help you today?", isUser: false, time: "19:00" },
  { id: 2, text: "Where is the less crowded food stall?", isUser: true, time: "19:05" },
  { id: 3, text: "Stall 5 is your best option right now. It has a low wait time of ~2 minutes and is near Gate 2.", isUser: false, time: "19:05" }
];

const Chat = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    
    // Add user message
    const newMsg = {
      id: Date.now(),
      text: inputVal,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newMsg]);
    setInputVal('');
    
    // Auto-reply dummy behavior
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "I am currently in demo mode. AI responses will be connected soon!",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  return (
    <div className="page-container chat-page fade-in">
      <header className="chat-header">
        <div className="bot-avatar">
          <BotIcon size={24} className="text-primary" />
        </div>
        <div>
          <h2 className="chat-title">SmartVenue Assistant</h2>
          <span className="chat-status text-success">● Online</span>
        </div>
      </header>

      <div className="chat-window">
        {messages.map(msg => (
          <ChatBubble 
            key={msg.id} 
            message={msg.text} 
            isUser={msg.isUser} 
            timestamp={msg.time} 
          />
        ))}
      </div>

      <form className="chat-input-area" onSubmit={handleSend}>
        <input 
          type="text" 
          className="chat-input" 
          placeholder="Ask about food, washrooms, exits..." 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit" className="send-button" disabled={!inputVal.trim()}>
          <SendIcon size={20} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
