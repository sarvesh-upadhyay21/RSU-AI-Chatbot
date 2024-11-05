import React, { useState } from 'react';
import { getBotResponse } from '../services/chatService';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInput('');

      const response = await getBotResponse(input);
      const botMessage = { text: response, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  return (
    <div>
      <h2>ChatBot</h2>
      <div className="chat-window">
        {messages.map((message, index) => (
          <p key={index} className={message.sender}>
            {message.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatBot;
