// Home.jsx
import React, { useState } from 'react';
import '../assets/styles/Home.css';
import ChatInput from '../components/ChatInput';

function Home() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user', id: Date.now() }]);
   
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: `AI response to: ${message}`,
        sender: 'ai',
        id: Date.now() + 1
      }]);
    }, 1000);
  };

  return (
    <div className="home-container">
      <div className="chat-messages">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`message ${message.sender}-message`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />

    </div>
  );
}

export default Home;