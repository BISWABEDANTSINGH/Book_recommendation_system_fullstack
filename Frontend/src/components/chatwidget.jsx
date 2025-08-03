import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi 👋, how can we help?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const chatId = (() => {
    let stored = sessionStorage.getItem('chatId');
    if (!stored) {
      stored = 'chat_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('chatId', stored);
    }
    return stored;
  })();

const handleSend = () => {
  const message = inputValue.trim();
  if (!message) return;

  setMessages((prev) => [...prev, { type: 'user', text: message }]);
  setInputValue('');

  // Simple keyword-based responses
  const lowerMsg = message.toLowerCase();
  let reply = "Sorry, I didn't understand that.";

  if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
    reply = "Hello! How can I help you today?";
  } else if (lowerMsg.includes("help")) {
    reply = "Sure! You can ask me about our services, pricing, or support.";
  } else if (lowerMsg.includes("price")) {
    reply = "Our pricing varies based on the service. Can you specify what you're interested in?";
  } else if (lowerMsg.includes("thanks") || lowerMsg.includes("thank you")) {
    reply = "You're welcome! 😊";
  } else if (lowerMsg.includes("bye")) {
    reply = "Goodbye! Have a great day! 👋";
  }
  else if (lowerMsg.includes("can u find me some books")) {
    reply = "Sure I can, In which category YOU want👋";
  }
  else if (lowerMsg.includes("story book")) {
    reply = "Here are some recomendation 👋";
  }

  setTimeout(() => {
    setMessages((prev) => [...prev, { type: 'bot', text: reply }]);
  }, 500); // Simulate delay
};


  return (
    <>
      <button
        style={styles.bubble}
        onClick={() => setIsOpen(true)}
      >
        💬
      </button>

      {isOpen && (
        <div style={styles.container}>
          <div style={styles.header}>
            <span>Chat</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div style={styles.body}>
            {messages.map((msg, idx) => (
              <p
                key={idx}
                style={{
                  ...styles.message,
                  background: msg.type === 'user' ? '#f1f1f1' : '#854fff',
                  color: msg.type === 'user' ? '#333' : '#fff',
                }}
              >
                {msg.text}
              </p>
            ))}
          </div>
          <div style={styles.footer}>
            <input
              type="text"
              placeholder="Type your message here..."
              style={styles.input}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button style={styles.sendButton} onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  bubble: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    background: '#854fff',
    color: 'white',
    border: 'none',
    width: 50,
    height: 50,
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: 20,
    zIndex: 1001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
  container: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 350,
    height: 500,
    background: 'white',
    borderRadius: 12,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000,
    overflow: 'hidden',
  },
  header: {
    background: '#854fff',
    color: 'white',
    padding: 20,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 18,
  },
  body: {
    flex: 1,
    padding: 20,
    overflowY: 'auto',
  },
  message: {
    marginBottom: 15,
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
    wordWrap: 'break-word',
  },
  footer: {
    padding: 12,
    borderTop: '1px solid #ddd',
    display: 'flex',
    gap: 10,
  },
  input: {
    flex: 1,
    padding: 8,
    border: '1px solid #ddd',
    borderRadius: 8,
    outline: 'none',
  },
  sendButton: {
    background: '#854fff',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: 8,
    cursor: 'pointer',
  },
};

export default ChatWidget;
