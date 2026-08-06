// src/pages/UserLogin.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain,
  User, 
  Lock, 
  LogIn, 
  ArrowLeft,
  Eye,
  EyeOff,
  AlertCircle,
  Shield,
  CheckCircle
} from 'lucide-react';
import { authAPI } from '../services/api';

const UserLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authAPI.login({
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      localStorage.setItem('user', JSON.stringify(response.user));

      if (rememberMe) {
        localStorage.setItem('remember_me', 'true');
      }

      const userRole = response.user.role;
      if (userRole === 'admin') {
        navigate('/admin/dashboard');
      } else if (userRole === 'counsellor') {
        navigate('/counsellor/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

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
            Welcome back
          </h2>
          <p style={{
            color: "#6b7280",
            marginBottom: "4px"
          }}>
            Sign in to continue your wellness journey
          </p>
          <p style={{
            fontSize: "14px",
            color: "#9ca3af"
          }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{
              fontWeight: "600",
              color: "#2563eb",
              textDecoration: "none"
            }}
            onMouseEnter={(e) => e.target.style.color = "#1d4ed8"}
            onMouseLeave={(e) => e.target.style.color = "#2563eb"}>
              Create one now
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

            {/* Username/Email */}
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="username" style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "6px"
              }}>
                Username or Email
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
                  id="username"
                  name="username"
                  type="text"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="Enter your username or email"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="password" style={{
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
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 48px 12px 40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
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

            {/* Remember Me & Forgot Password */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px"
            }}>
              <label style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                fontSize: "14px",
                color: "#6b7280"
              }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "4px",
                    accentColor: "#2563eb",
                    cursor: "pointer"
                  }}
                />
                Remember me
              </label>
              <Link 
                to="/forgot-password" 
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#2563eb",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => e.target.style.color = "#1d4ed8"}
                onMouseLeave={(e) => e.target.style.color = "#2563eb"}
              >
                Forgot password?
              </Link>
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
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "white",
                      borderRadius: "50%"
                    }}
                  />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn size={16} />
                  Sign In
                </>
              )}
            </button>

            {/* Divider */}
            <div style={{
              position: "relative",
              margin: "24px 0"
            }}>
              <div style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center"
              }}>
                <div style={{
                  width: "100%",
                  borderTop: "1px solid #e5e7eb"
                }}></div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                fontSize: "14px"
              }}>
                <span style={{
                  padding: "0 16px",
                  background: "white",
                  color: "#9ca3af"
                }}>
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "16px"
            }}>
              <button
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  background: "white",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#f9fafb";
                  e.target.style.borderColor = "#d1d5db";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.borderColor = "#e5e7eb";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  background: "white",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#f9fafb";
                  e.target.style.borderColor = "#d1d5db";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.borderColor = "#e5e7eb";
                }}
              >
                <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>

            {/* Back to Home */}
            <div style={{ textAlign: "center" }}>
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
            Secure Login
          </span>
          <span style={{ width: "1px", height: "16px", background: "#d1d5db" }} />
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CheckCircle size={12} style={{ color: "#22c55e" }} />
            24/7 Support
          </span>
          <span style={{ width: "1px", height: "16px", background: "#d1d5db" }} />
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Brain size={12} style={{ color: "#7c3aed" }} />
            Mental Wellness
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UserLogin;