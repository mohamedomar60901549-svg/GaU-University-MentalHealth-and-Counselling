import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  User, 
  Mail, 
  Phone, 
  CalendarCheck, 
  Loader2,
  ArrowLeft,
  CheckCircle,
  Shield,
  AlertCircle,
  GraduationCap,
  MapPin,
  Clock
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Register() {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event || "Wellness Workshop";
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentId: '',
    event: event,
    department: '',
    yearOfStudy: ''
  });
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setRegistered(true);
    }, 1500);
  };

  if (registered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="max-w-md mx-auto px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 text-center border border-gray-100"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25"
              >
                <CheckCircle className="text-white text-4xl" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
              <div className="w-16 h-1 bg-red-600 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 mb-4">
                You're registered for:
              </p>
              <span className="inline-block bg-red-50 text-red-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                {event}
              </span>
              <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Name:</span> {formData.name}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Email:</span> {formData.email}
                </p>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                A confirmation email has been sent to {formData.email}
              </p>
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-600/25"
              >
                <ArrowLeft className="size-4" />
                Back to Home
              </button>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100"
          >
            {/* Header */}
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-600/25 mb-4"
              >
                <CalendarCheck className="size-8" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900">
                Event Registration
              </h2>
              <p className="text-gray-600 mt-1">
                Register for:
              </p>
              <span className="inline-block bg-red-50 text-red-700 px-4 py-1.5 rounded-full font-semibold text-sm mt-1">
                {event}
              </span>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl mb-4"
              >
                <AlertCircle className="size-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    placeholder="student@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    placeholder="+254 700 000 000"
                    required
                  />
                </div>
              </div>

              {/* Student ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Student ID
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.studentId}
                    onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    placeholder="S12345"
                    required
                  />
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Department
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    placeholder="Computer Science"
                  />
                </div>
              </div>

              {/* Year of Study */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Year of Study
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <select
                    value={formData.yearOfStudy}
                    onChange={(e) => setFormData({...formData, yearOfStudy: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition appearance-none"
                  >
                    <option value="">Select year of study</option>
                    {[1, 2, 3, 4, 5, 6].map(year => (
                      <option key={year} value={year}>Year {year}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-red-600/25 hover:shadow-red-600/40 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    <span>Registering...</span>
                  </>
                ) : (
                  <>
                    <CalendarCheck className="size-4" />
                    <span>Complete Registration</span>
                  </>
                )}
              </button>

              {/* Back to Events */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/events')}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition"
                >
                  <ArrowLeft className="size-4" />
                  Back to Events
                </button>
              </div>
            </form>
          </motion.div>

          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-400"
          >
            <span className="flex items-center gap-1.5">
              <Shield className="size-3 text-blue-500" />
              Secure Registration
            </span>
            <span className="w-px h-4 bg-gray-300" />
            <span className="flex items-center gap-1.5">
              <CheckCircle className="size-3 text-green-500" />
              Free Event
            </span>
            <span className="w-px h-4 bg-gray-300" />
            <span className="flex items-center gap-1.5">
              <Heart className="size-3 text-red-500" />
              Student Friendly
            </span>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;