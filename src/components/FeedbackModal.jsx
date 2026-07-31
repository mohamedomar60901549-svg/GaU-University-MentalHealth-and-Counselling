import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaStar, FaComment } from 'react-icons/fa';

function FeedbackModal({ isOpen, onClose, appointment }) {
  if (!isOpen || !appointment) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 z-10"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Session Feedback</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Session with</p>
                <p className="font-semibold text-gray-800">{appointment.counsellorName}</p>
                <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
              </div>

              {appointment.feedback && (
                <div className="border-l-4 border-primary-500 bg-primary-50 p-4">
                  <p className="text-sm text-gray-700">{appointment.feedback}</p>
                </div>
              )}

              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
                <span className="ml-2 text-sm text-gray-600">4.0</span>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default FeedbackModal;