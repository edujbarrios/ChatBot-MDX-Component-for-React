import React, { useState } from 'react';

const Chatbot = ({ faqs }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    // Simulated AI response
    setTimeout(() => {
      const aiResponse = {
        sender: 'bot',
        text: `This is an automated response to: "${input}".`,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setInput('');
  };

  const handleFAQClick = (question) => {
    setInput(question);
    handleSend();
  };

  return (
    <div className="chatbot-container" style={styles.container}>
      <div className="chatbot-window" style={styles.window}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>Send</button>
      </div>
      <div className="faq-section" style={styles.faqContainer}>
        <h3>Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <button
            key={index}
            onClick={() => handleFAQClick(faq.question)}
            style={styles.faqButton}
          >
            {faq.question}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' },
  window: { height: '400px', overflowY: 'scroll', border: '1px solid #ddd', padding: '10px' },
  inputContainer: { display: 'flex', marginTop: '10px' },
  input: { flex: 1, padding: '10px', fontSize: '16px' },
  button: { padding: '10px', fontSize: '16px', marginLeft: '10px' },
  userMessage: { textAlign: 'right', backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '10px', margin: '5px 0' },
  botMessage: { textAlign: 'left', backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '10px', margin: '5px 0' },
  faqContainer: { marginTop: '20px' },
  faqButton: { display: 'block', width: '100%', padding: '10px', marginTop: '5px', cursor: 'pointer' },
};

export default Chatbot;
