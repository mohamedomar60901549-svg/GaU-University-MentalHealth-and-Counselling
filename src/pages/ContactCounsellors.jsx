import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppointments } from '../context/AppointmentContext';
import { FaStar, FaCalendarCheck, FaGraduationCap, FaUsers, FaClock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactCounsellors() {
  const navigate = useNavigate();
  const { counsellors } = useAppointments();
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const specializations = ['all', ...new Set(counsellors.map(c => c.specialization))];

  const filteredCounsellors = selectedSpecialization === 'all' 
    ? counsellors 
    : counsellors.filter(c => c.specialization === selectedSpecialization);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Professional Counsellors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of experienced and compassionate mental health professionals
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 justify-center mb-8"
          >
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-4 py-2 rounded-full capitalize transition-all
                  ${selectedSpecialization === spec 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {spec}
              </button>
            ))}
          </motion.div>

          {/* Counsellors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCounsellors.map((counsellor, index) => (
              <motion.div
                key={counsellor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <img 
                  src={counsellor.image} 
                  alt={counsellor.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {counsellor.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {counsellor.specialization}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="flex items-center text-sm text-gray-600">
                      <FaStar className="text-yellow-400 mr-1" />
                      {counsellor.rating}
                    </span>
                    <span className="flex items-center text-sm text-gray-600">
                      <FaUsers className="text-gray-400 mr-1" />
                      {counsellor.studentsHelped}+ students
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    <FaGraduationCap className="inline mr-1" />
                    {counsellor.experience} experience
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Availability:</p>
                    <div className="flex flex-wrap gap-2">
                      {counsellor.availability.map((slot, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => navigate('/appointment', { state: { counsellorId: counsellor.id } })}
                    className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 
                             transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaCalendarCheck />
                    <span>Book Session</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactCounsellors;