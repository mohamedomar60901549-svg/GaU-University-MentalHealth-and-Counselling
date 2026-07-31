import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help. Reach out to us anytime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <FaPhone className="text-primary-600 text-3xl mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+254 700 000 000</p>
              <p className="text-sm text-gray-500">Mon-Fri, 8am-5pm</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <FaEnvelope className="text-primary-600 text-3xl mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">counselling@garissauni.ac.ke</p>
              <p className="text-sm text-gray-500">24hr response time</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <FaMapMarkerAlt className="text-primary-600 text-3xl mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Garissa University</p>
              <p className="text-sm text-gray-500">Student Center, Room 101</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                  <p className="font-semibold">Thank you for contacting us!</p>
                  <p className="text-sm mt-2">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold
                             hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map/Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Emergency</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600">
                    <FaPhone className="text-red-600 mr-2" />
                    Campus Security: +254 700 000 111
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaPhone className="text-red-600 mr-2" />
                    Crisis Helpline: +254 700 000 222
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaPhone className="text-red-600 mr-2" />
                    Ambulance: +254 700 000 333
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;