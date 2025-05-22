'use client';
import { useState } from 'react';

export default function ShadowSlaveChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Floating Chat Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="chat-button"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#FFD700',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: '#1c1c1f',
          zIndex: 1000,
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container" style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '350px',
          height: '500px',
          background: '#1c1c1f',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 999,
          border: '1px solid #FFD700',
        }}>
          {/* Chat Header */}
          <div style={{
            padding: '15px',
            background: '#2a2a2a',
            borderBottom: '1px solid #FFD700',
            borderRadius: '10px 10px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <h3 style={{ margin: 0, color: '#FFD700', fontFamily: 'DMC5' }}>Shadow Slave Chat</h3>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFD700',
                cursor: 'pointer',
                fontSize: '20px',
              }}
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  padding: '10px 15px',
                  borderRadius: '10px',
                  maxWidth: '80%',
                  color: '#fff',
                  background: msg.isUser ? '#FFD700' : '#2a2a2a',
                  alignSelf: msg.isUser ? 'flex-end' : 'flex-start',
                  color: msg.isUser ? '#1c1c1f' : '#fff',
                }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div style={{
                padding: '10px 15px',
                borderRadius: '10px',
                maxWidth: '80%',
                background: '#2a2a2a',
                color: '#fff',
                alignSelf: 'flex-start',
              }}>
                Thinking...
              </div>
            )}
          </div>

          {/* Input Area */}
          <div style={{
            padding: '15px',
            borderTop: '1px solid #FFD700',
            display: 'flex',
            gap: '10px',
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Shadow Slave..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #FFD700',
                background: '#2a2a2a',
                color: '#fff',
              }}
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                background: '#FFD700',
                color: '#1c1c1f',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.7 : 1,
              }}
            >
              {isLoading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}