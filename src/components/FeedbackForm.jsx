import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppointments } from '../context/AppointmentContext';
import { FaStar, FaTimes, FaPaperPlane } from 'react-icons/fa';

function FeedbackForm({ appointment, onClose }) {
  const { addFeedback } = useAppointments();
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [recommendations, setRecommendations] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const feedbackData = {
      appointmentId: appointment.id,
      counsellorId: appointment.counsellorId,
      studentId: appointment.studentId,
      feedback: feedback,
      rating: rating,
      recommendations: recommendations,
      date: new Date().toISOString()
    };

    // Simulate API call
    setTimeout(() => {
      addFeedback(feedbackData);
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

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
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Session Feedback</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Student Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600">Providing feedback for:</p>
              <p className="font-semibold text-gray-800">{appointment?.studentName}</p>
              <p className="text-sm text-gray-500">{appointment?.date} at {appointment?.time}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How would you rate this session? *
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none"
                    >
                      <FaStar
                        className={`text-2xl transition-colors ${
                          star <= (hoverRating || rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Feedback *
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows="4"
                  placeholder="Please provide your observations and recommendations for the student..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              {/* Recommendations */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Follow-up Recommendations
                </label>
                <select
                  value={recommendations}
                  onChange={(e) => setRecommendations(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select recommendation</option>
                  <option value="follow-up">Schedule follow-up session</option>
                  <option value="resources">Provide additional resources</option>
                  <option value="group">Recommend peer support group</option>
                  <option value="specialist">Refer to specialist</option>
                  <option value="none">No further action needed</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !feedback || rating === 0}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold
                         hover:bg-primary-700 transition-colors disabled:bg-gray-300 
                         disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Submit Feedback</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default FeedbackForm;