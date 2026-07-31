import { motion } from 'framer-motion';
import { FaBrain, FaHeart, FaBook, FaVideo, FaNewspaper, FaPodcast } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Awareness() {
  const topics = [
    {
      icon: FaBrain,
      title: "Understanding Anxiety",
      content: "Learn about symptoms, causes, and coping strategies for anxiety.",
      readTime: "5 min read"
    },
    {
      icon: FaHeart,
      title: "Depression Awareness",
      content: "Recognize the signs of depression and how to seek help.",
      readTime: "6 min read"
    },
    {
      icon: FaBrain,
      title: "Stress Management",
      content: "Practical techniques to manage academic and personal stress.",
      readTime: "4 min read"
    },
    {
      icon: FaHeart,
      title: "Self-Care Strategies",
      content: "Daily practices to maintain good mental health.",
      readTime: "3 min read"
    }
  ];

  const articles = [
    {
      title: "10 Signs You Might Need Counseling",
      category: "Mental Health",
      date: "June 10, 2024"
    },
    {
      title: "How to Support a Friend in Distress",
      category: "Peer Support",
      date: "June 8, 2024"
    },
    {
      title: "Mindfulness for Students",
      category: "Wellness",
      date: "June 5, 2024"
    },
    {
      title: "Breaking the Stigma",
      category: "Awareness",
      date: "June 1, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Mental Health Awareness
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Knowledge is power. Learn about mental health to better understand yourself and others.
            </p>
          </motion.div>

          {/* Quick Topics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <Icon className="text-pink-600 text-4xl mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{topic.content}</p>
                  <p className="text-xs text-pink-600">⏱️ {topic.readTime}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Featured Articles */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              <div className="space-y-4">
                {articles.map((article, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-semibold text-gray-800 mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.category} • {article.date}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-pink-600 font-medium hover:underline">
                Read All Articles →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-pink-600 text-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Myths vs Facts</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">❌ Myth: Mental health issues are rare</p>
                  <p className="text-pink-100">✅ Fact: 1 in 5 adults experience mental health issues</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">❌ Myth: Therapy is for weak people</p>
                  <p className="text-pink-100">✅ Fact: Seeking help shows strength and self-awareness</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">❌ Myth: You can just "snap out of it"</p>
                  <p className="text-pink-100">✅ Fact: Mental health conditions are real medical conditions</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Awareness Campaign */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Break the Stigma</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Join our campaign to create a campus where everyone feels safe to talk about mental health.
            </p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50">
              Take the Pledge
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Awareness;