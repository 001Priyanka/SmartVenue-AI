import './ChatBubble.css';

const ChatBubble = ({ message, isUser, timestamp }) => {
  return (
    <div className={`chat-bubble-container ${isUser ? 'user' : 'bot'}`}>
      <div className="chat-bubble">
        <p className="chat-message">{message}</p>
        {timestamp && <span className="chat-timestamp">{timestamp}</span>}
      </div>
    </div>
  );
};

export default ChatBubble;
