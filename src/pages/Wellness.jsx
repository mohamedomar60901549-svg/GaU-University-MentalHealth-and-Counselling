import { motion } from 'framer-motion';
import { FaHeart, FaLeaf, FaBicycle, FaMoon, FaApple, FaWater } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Wellness() {
  const programs = [
    {
      icon: FaHeart,
      title: "Mindfulness Meditation",
      schedule: "Mon, Wed, Fri • 8:00 AM",
      description: "Start your day with guided meditation sessions",
      instructor: "Dr. Sarah Johnson"
    },
    {
      icon: FaLeaf,
      title: "Yoga & Stretching",
      schedule: "Tue, Thu • 5:00 PM",
      description: "Gentle yoga for stress relief and flexibility",
      instructor: "Prof. James Mwangi"
    },
    {
      icon: FaBicycle,
      title: "Wellness Walks",
      schedule: "Sat • 7:00 AM",
      description: "Group walks around campus to connect with nature",
      instructor: "Ms. Elizabeth Wanjiku"
    },
    {
      icon: FaMoon,
      title: "Sleep Hygiene Workshop",
      schedule: "First Monday monthly • 7:00 PM",
      description: "Learn techniques for better sleep",
      instructor: "Dr. Sarah Johnson"
    },
    {
      icon: FaApple,
      title: "Nutrition & Mental Health",
      schedule: "Second Wednesday monthly • 6:00 PM",
      description: "How diet affects your mental wellbeing",
      instructor: "Prof. James Mwangi"
    },
    {
      icon: FaWater,
      title: "Stress Management",
      schedule: "Weekly • Thu 3:00 PM",
      description: "Practical techniques to manage academic stress",
      instructor: "Ms. Elizabeth Wanjiku"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Wellness Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nurture your mind, body, and spirit with our holistic wellness programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-green-100"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-green-600 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-2">{program.schedule}</p>
                  <p className="text-gray-600 mb-3">{program.description}</p>
                  <p className="text-sm text-gray-500">Instructor: {program.instructor}</p>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Join Program
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Wellness Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-green-600 text-white rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-4">Daily Wellness Tip</h2>
            <p className="text-xl mb-4">
              "Take 5 minutes today to practice deep breathing. Inhale for 4 counts, hold for 4, exhale for 4. Repeat 5 times."
            </p>
            <p className="text-green-100">- Your Wellness Team</p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Wellness;