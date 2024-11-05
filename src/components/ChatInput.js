// ChatInput.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../components/css/ChatInput.css';

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="chat-input-field"
        />
        <button 
          type="submit" 
          className="chat-send-button"
          disabled={!message.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}

ChatInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default ChatInput;
