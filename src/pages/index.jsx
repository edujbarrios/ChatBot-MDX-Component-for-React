import Chatbot from '../components/Chatbot';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the AI Chatbot</h1>
      <Chatbot
        faqs={[
          { question: 'How do I register?', answer: 'Go to the homepage and sign up.' },
          { question: 'What are your working hours?', answer: '9 AM to 6 PM.' },
          { question: 'Where can I find more info?', answer: 'Visit our help section.' },
        ]}
      />
    </div>
  );
}
