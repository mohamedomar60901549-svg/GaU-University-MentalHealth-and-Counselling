import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestion } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is counselling really confidential?",
      answer: "Yes, absolutely. All counselling sessions are completely confidential within legal and ethical boundaries. Your information will never be shared without your consent, except in cases where there is risk of harm to yourself or others."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by clicking the 'Book Counselling' button on our homepage or through your student dashboard. Select your preferred counsellor, date, and time, then provide a brief reason for your visit."
    },
    {
      question: "What if I need help after hours?",
      answer: "Our 24/7 emergency helpline is always available. Call +254 700 000 000 anytime for immediate support. You can also access our self-help resources and crisis guides on the emergency page."
    },
    {
      question: "Is the service free?",
      answer: "Yes, all counselling services are completely free for Garissa University students. We believe mental health support should be accessible to everyone."
    },
    {
      question: "How long is each session?",
      answer: "Standard counselling sessions are 50 minutes long. You can book follow-up sessions as needed. Some workshops and group sessions may vary in length."
    },
    {
      question: "Can I choose my counsellor?",
      answer: "Yes, you can browse our counsellors' profiles and choose one that you feel comfortable with. You can also request to switch counsellors at any time."
    },
    {
      question: "What happens in the first session?",
      answer: "The first session is an intake session where you'll discuss your concerns with the counsellor, set goals, and determine the best approach for your situation. It's also a chance to see if you feel comfortable with the counsellor."
    },
    {
      question: "Can I get counselling for a friend?",
      answer: "While you can encourage a friend to seek help, counselling is most effective when the individual chooses to participate. You can share our resources with them or contact us for advice on how to support them."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <FaQuestion className="text-6xl text-primary-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our counselling services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <FaChevronDown
                    className={`text-gray-500 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-primary-50 rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Contact our support team and we'll be happy to help
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;