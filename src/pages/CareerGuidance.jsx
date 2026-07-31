import { motion } from 'framer-motion';
import { FaBriefcase, FaChartLine, FaFileAlt, FaHandshake, FaLaptop, FaGlobe } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CareerGuidance() {
  const services = [
    {
      icon: FaFileAlt,
      title: "Resume & CV Review",
      description: "Get professional feedback on your resume and cover letters",
      duration: "45 min session"
    },
    {
      icon: FaHandshake,
      title: "Interview Preparation",
      description: "Mock interviews and tips to ace your job interviews",
      duration: "60 min session"
    },
    {
      icon: FaChartLine,
      title: "Career Path Assessment",
      description: "Discover careers that match your skills and interests",
      duration: "90 min session"
    },
    {
      icon: FaLaptop,
      title: "LinkedIn Profile Optimization",
      description: "Make your profile stand out to recruiters",
      duration: "45 min session"
    },
    {
      icon: FaGlobe,
      title: "Job Search Strategies",
      description: "Learn effective job search techniques and networking",
      duration: "60 min session"
    },
    {
      icon: FaBriefcase,
      title: "Internship Placement",
      description: "Guidance on finding and securing internships",
      duration: "Ongoing support"
    }
  ];

  const workshops = [
    {
      title: "Career Fair Prep",
      date: "June 20, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Auditorium"
    },
    {
      title: "Networking Skills",
      date: "June 25, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Online"
    },
    {
      title: "Graduate School Applications",
      date: "July 2, 2024",
      time: "1:00 PM - 3:00 PM",
      location: "Career Center"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Career Guidance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your future with professional career counseling and guidance
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-blue-100"
                >
                  <Icon className="text-blue-600 text-4xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <p className="text-sm text-blue-600 font-medium mb-4">⏱️ {service.duration}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Book Session
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Upcoming Workshops */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Upcoming Workshops</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {workshops.map((workshop, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{workshop.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">📅 {workshop.date}</p>
                  <p className="text-sm text-gray-600 mb-1">🕒 {workshop.time}</p>
                  <p className="text-sm text-gray-600 mb-3">📍 {workshop.location}</p>
                  <button className="text-blue-600 font-medium hover:underline">
                    Register →
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-600 text-white rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="mb-2">"The career guidance helped me land my dream internship at Google."</p>
                <p className="font-semibold">- Michael Omondi, CS Class of 2023</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="mb-2">"My resume review session was invaluable. I got 3 job offers!"</p>
                <p className="font-semibold">- Amina Hassan, Business Class of 2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CareerGuidance;