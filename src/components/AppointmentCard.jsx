import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUserMd, FaComment } from 'react-icons/fa';

function AppointmentCard({ appointment, index, getStatusBadge, onViewFeedback }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start space-x-4">
          <div className="bg-primary-100 p-3 rounded-full">
            <FaUserMd className="text-primary-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{appointment.counsellorName}</h3>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-1" />
                {appointment.date}
              </span>
              <span className="flex items-center">
                <FaClock className="mr-1" />
                {appointment.time}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Reason: {appointment.reason}
            </p>
            {appointment.feedback && (
              <div className="mt-2 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <FaComment className="inline mr-2" />
                  Counsellor's feedback: {appointment.feedback}
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {getStatusBadge(appointment.status)}
          {appointment.status === 'completed' && appointment.feedback && (
            <button
              onClick={() => onViewFeedback()}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default AppointmentCard;