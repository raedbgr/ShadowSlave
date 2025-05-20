'use client';
import { useState } from 'react';

export default function ShadowSlaveChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    setInput('');
    setIsLoading(true);

    try {
      // Fetch bot response 
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage: input }),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to get response');
      }
      
      const botReply = await res.json();

      // Add bot reply
      setMessages((prev) => [...prev, { text: botReply.content, isUser: false }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: `Error: ${error.message}`, isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && <div className="message bot">Thinking...</div>}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Shadow Slave..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>

      <style jsx>{`
        .chatbot-container {
          max-width: 500px;
          margin: 0 auto;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          background: #1a1a1a;
          color: #fff;
        }
        .chat-messages {
          height: 300px;
          overflow-y: auto;
          margin-bottom: 16px;
        }
        .message {
          padding: 8px 12px;
          margin: 8px 0;
          border-radius: 4px;
          max-width: 80%;
        }
        .user {
          background: #0066cc;
          margin-left: auto;
        }
        .bot {
          background: #333;
          margin-right: auto;
        }
        .chat-input {
          display: flex;
        }
        input {
          flex: 1;
          padding: 8px;
          border: 1px solid #444;
          border-radius: 4px 0 0 4px;
          background: #222;
          color: #fff;
        }
        button {
          padding: 8px 16px;
          background: #0066cc;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        button:disabled {
          background: #555;
        }
      `}</style>
    </div>
  );
}