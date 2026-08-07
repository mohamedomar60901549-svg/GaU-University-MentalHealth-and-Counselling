import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain,
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
  Clock,
  Lock,
  Eye,
  EyeOff,
  LogIn
} from 'lucide-react';

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
    yearOfStudy: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setRegistered(true);
    }, 1500);
  };

  if (registered) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)",
        padding: "48px 16px"
      }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          style={{
            maxWidth: "448px",
            width: "100%",
            background: "white",
            borderRadius: "24px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            padding: "32px",
            textAlign: "center",
            border: "1px solid #f3f4f6"
          }}
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              boxShadow: "0 8px 24px rgba(34,197,94,0.25)"
            }}
          >
            <CheckCircle size={40} style={{ color: "white" }} />
          </motion.div>
          <h2 style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "8px"
          }}>Registration Successful!</h2>
          <div style={{
            width: "64px",
            height: "4px",
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            margin: "0 auto 16px",
            borderRadius: "4px"
          }}></div>
          <p style={{ color: "#6b7280", marginBottom: "16px" }}>
            You're registered for:
          </p>
          <span style={{
            display: "inline-block",
            background: "#dbeafe",
            color: "#1d4ed8",
            padding: "8px 16px",
            borderRadius: "9999px",
            fontWeight: "600",
            fontSize: "14px",
            marginBottom: "24px"
          }}>
            {event}
          </span>
          <div style={{
            background: "#f9fafb",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "24px",
            textAlign: "left"
          }}>
            <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "4px" }}>
              <span style={{ fontWeight: "600" }}>Name:</span> {formData.name}
            </p>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              <span style={{ fontWeight: "600" }}>Email:</span> {formData.email}
            </p>
          </div>
          <p style={{ fontSize: "14px", color: "#9ca3af", marginBottom: "24px" }}>
            A confirmation email has been sent to {formData.email}
          </p>
          <button
            onClick={() => navigate('/')}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "white",
              padding: "12px 32px",
              borderRadius: "12px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 4px 12px rgba(37,99,235,0.25)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.style.boxShadow = "0 4px 16px rgba(37,99,235,0.35)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.25)";
            }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)",
      padding: "48px 16px"
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: "448px",
          width: "100%"
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "white",
              boxShadow: "0 8px 24px rgba(37,99,235,0.25)",
              marginBottom: "16px"
            }}
          >
            <Brain size={32} />
          </motion.div>
          <h2 style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "8px"
          }}>
            Create Account
          </h2>
          <p style={{
            color: "#6b7280",
            marginBottom: "4px"
          }}>
            Join Student Mental Health community
          </p>
          <p style={{
            fontSize: "14px",
            color: "#9ca3af"
          }}>
            Already have an account?{' '}
            <Link to="/login" style={{
              fontWeight: "600",
              color: "#2563eb",
              textDecoration: "none"
            }}
            onMouseEnter={(e) => e.target.style.color = "#1d4ed8"}
            onMouseLeave={(e) => e.target.style.color = "#2563eb"}>
              Sign in
            </Link>
          </p>
        </div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: "white",
            borderRadius: "24px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            padding: "32px",
            border: "1px solid #f3f4f6"
          }}
        >
          <form onSubmit={handleSubmit}>
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  color: "#dc2626",
                  padding: "12px 16px",
                  borderRadius: "16px",
                  marginBottom: "16px"
                }}
              >
                <AlertCircle size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "14px" }}>{error}</span>
              </motion.div>
            )}

            {/* Full Name */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "6px"
              }}>
                Full Name
              </label>
              <div style={{ position: "relative" }}>
                <User style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#9ca3af"
                }} />
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    background: "white"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "6px"
              }}>
                Email Address
              </label>
              <div style={{ position: "relative" }}>
                <Mail style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#9ca3af"
                }} />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    background: "white"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="student@example.com"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "6px"
              }}>
                Phone Number
              </label>
              <div style={{ position: "relative" }}>
                <Phone style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#9ca3af"
                }} />
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    background: "white"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="+254 700 000 000"
                  required
                />
              </div>
            </div>

            {/* Student ID */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "6px"
              }}>
                Student ID
              </label>
              <div style={{ position: "relative" }}>
                <GraduationCap style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#9ca3af"
                }} />
                <input
                  name="studentId"
                  type="text"
                  value={formData.studentId}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    background: "white"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="S12345"
                  required
                />
              </div>
            </div>

            {/* Department */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "6px"
              }}>
                Department
              </label>
              <div style={{ position: "relative" }}>
                <MapPin style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#9ca3af"
                }} />
                <input
                  name="department"
                  type="text"
                  value={formData.department}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    background: "white"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="Computer Science"
                />
              </div>
            </div>

            {/* Year of Study */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "6px"
              }}>
                Year of Study
              </label>
              <div style={{ position: "relative" }}>
                <Clock style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#9ca3af",
                  zIndex: 1,
                  pointerEvents: "none"
                }} />
                <select
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    background: "white",
                    outline: "none",
                    transition: "all 0.2s",
                    appearance: "none",
                    boxSizing: "border-box",
                    cursor: "pointer"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <option value="">Select year of study</option>
                  {[1, 2, 3, 4, 5, 6].map(year => (
                    <option key={year} value={year}>Year {year}</option>
                  ))}
                </select>
                <div style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                  pointerEvents: "none",
                  fontSize: "12px"
                }}>▼</div>
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "6px"
              }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#9ca3af"
                }} />
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 48px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    background: "white"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="Min 8 characters"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "#9ca3af",
                    cursor: "pointer",
                    padding: "4px"
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "6px"
              }}>
                Confirm Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#9ca3af"
                }} />
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 48px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    background: "white"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "#9ca3af",
                    cursor: "pointer",
                    padding: "4px"
                  }}
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {formData.confirmPassword && (
                <p style={{
                  marginTop: "6px",
                  fontSize: "12px",
                  color: formData.confirmPassword === formData.password ? "#22c55e" : "#dc2626"
                }}>
                  {formData.confirmPassword === formData.password 
                    ? '✓ Passwords match' 
                    : '✗ Passwords do not match'}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(37,99,235,0.25)"
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.transform = "scale(1.02)";
                  e.target.style.boxShadow = "0 4px 16px rgba(37,99,235,0.35)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.25)";
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} />
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <User size={16} />
                  <span>Create Account</span>
                </>
              )}
            </button>

            {/* Back to Home */}
            <div style={{ textAlign: "center", paddingTop: "16px" }}>
              <Link 
                to="/" 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.color = "#2563eb"}
                onMouseLeave={(e) => e.target.style.color = "#9ca3af"}
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </div>
          </form>
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            fontSize: "12px",
            color: "#9ca3af"
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Shield size={12} style={{ color: "#3b82f6" }} />
            Secure Registration
          </span>
          <span style={{ width: "1px", height: "16px", background: "#d1d5db" }} />
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CheckCircle size={12} style={{ color: "#22c55e" }} />
            Free Account
          </span>
          <span style={{ width: "1px", height: "16px", background: "#d1d5db" }} />
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Brain size={12} style={{ color: "#7c3aed" }} />
            Student Wellness
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Register;