import { motion } from 'framer-motion';
import { FaBook, FaVideo, FaPodcast, FaFilePdf, FaHeadphones, FaYoutube } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Resources() {
  const resources = [
    {
      icon: FaBook,
      title: "Understanding Anxiety",
      type: "Article",
      readTime: "5 min read",
      link: "#"
    },
    {
      icon: FaVideo,
      title: "Mindfulness Meditation Guide",
      type: "Video",
      duration: "10 min",
      link: "#"
    },
    {
      icon: FaPodcast,
      title: "Student Mental Health Podcast",
      type: "Podcast",
      duration: "30 min",
      link: "#"
    },
    {
      icon: FaFilePdf,
      title: "Stress Management Workbook",
      type: "PDF",
      pages: "15 pages",
      link: "#"
    },
    {
      icon: FaHeadphones,
      title: "Guided Relaxation Audio",
      type: "Audio",
      duration: "15 min",
      link: "#"
    },
    {
      icon: FaYoutube,
      title: "Coping Strategies Workshop",
      type: "Video",
      duration: "45 min",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Self-Help Resources
            </h1>
            <p className="text-xl text-gray-600">
              Explore our collection of mental health resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.a
                  key={index}
                  href={resource.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
                >
                  <Icon className="text-primary-600 text-4xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <span>{resource.readTime || resource.duration || resource.pages}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Resources;