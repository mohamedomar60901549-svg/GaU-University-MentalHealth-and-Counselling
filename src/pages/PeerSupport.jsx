import { motion } from 'framer-motion';
import { FaUsers, FaComments, FaHandsHelping, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PeerSupport() {
  const groups = [
    {
      name: "First Year Experience",
      members: 15,
      meetingDay: "Every Tuesday",
      time: "4:00 PM - 5:30 PM",
      location: "Student Center, Room 101",
      description: "Connect with fellow first-year students navigating the transition to university life.",
      facilitator: "Mary Wanjiku (Year 3)"
    },
    {
      name: "Anxiety Support Circle",
      members: 12,
      meetingDay: "Every Wednesday",
      time: "3:00 PM - 4:30 PM",
      location: "Wellness Center",
      description: "A safe space to share experiences and coping strategies for anxiety.",
      facilitator: "John Omondi (Year 4)"
    },
    {
      name: "International Students",
      members: 20,
      meetingDay: "Every Thursday",
      time: "5:00 PM - 6:30 PM",
      location: "Library, Room 205",
      description: "Support group for international students adjusting to life in Kenya.",
      facilitator: "Dr. Ahmed Hassan"
    },
    {
      name: "Stress & Academic Pressure",
      members: 18,
      meetingDay: "Every Monday",
      time: "2:00 PM - 3:30 PM",
      location: "Education Building, Room 304",
      description: "Discuss academic challenges and share study-life balance strategies.",
      facilitator: "Prof. Elizabeth Mwangi"
    },
    {
      name: "LGBTQ+ Support",
      members: 10,
      meetingDay: "Every Friday",
      time: "4:00 PM - 5:30 PM",
      location: "Wellness Center (Private Room)",
      description: "Confidential support group for LGBTQ+ students.",
      facilitator: "Sarah Kimani"
    },
    {
      name: "Grief & Loss",
      members: 8,
      meetingDay: "Every Saturday",
      time: "10:00 AM - 11:30 AM",
      location: "Counseling Center",
      description: "Support for students coping with loss and bereavement.",
      facilitator: "Dr. James Otieno"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <FaUsers className="text-6xl text-purple-600 mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Peer Support Groups
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not alone. Connect with peers who understand what you're going through.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-purple-600 text-white rounded-xl p-6 text-center"
            >
              <FaUsers className="text-4xl mx-auto mb-2" />
              <p className="text-3xl font-bold">6</p>
              <p>Active Groups</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-purple-600 text-white rounded-xl p-6 text-center"
            >
              <FaComments className="text-4xl mx-auto mb-2" />
              <p className="text-3xl font-bold">83</p>
              <p>Active Members</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-purple-600 text-white rounded-xl p-6 text-center"
            >
              <FaHandsHelping className="text-4xl mx-auto mb-2" />
              <p className="text-3xl font-bold">12</p>
              <p>Peer Facilitators</p>
            </motion.div>
          </div>

          {/* Groups Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {groups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-purple-100"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{group.name}</h3>
                <p className="text-purple-600 mb-3">👥 {group.members} members</p>
                <p className="text-gray-600 mb-4">{group.description}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-gray-600">
                    <FaCalendarAlt className="text-purple-600 mr-2" />
                    {group.meetingDay}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaClock className="text-purple-600 mr-2" />
                    {group.time}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="text-purple-600 mr-2" />
                    {group.location}
                  </p>
                </div>
                
                <p className="text-sm text-gray-500 mb-4">Facilitator: {group.facilitator}</p>
                
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Join Group
                </button>
              </motion.div>
            ))}
          </div>

          {/* Join Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-purple-100 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to Start a New Group?</h2>
            <p className="text-gray-600 mb-4">
              If you don't see a group that fits your needs, we can help you start one.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700">
              Propose New Group
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PeerSupport;