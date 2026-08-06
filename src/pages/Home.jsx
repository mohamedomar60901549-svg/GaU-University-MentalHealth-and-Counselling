import { Link } from 'react-router-dom';
import { 
  FaBrain, 
  FaHome, 
  FaInfoCircle, 
  FaPhone, 
  FaQuestionCircle, 
  FaShieldAlt, 
  FaFileAlt,
  FaUserGraduate,
  FaCommentDots,
  FaChartLine,
  FaClock,
  FaUsers,
  FaCalendarCheck,
  FaBook,
  FaStar,
  FaCheckCircle,
  FaHeart,
  FaHandsHelping,
  FaGraduationCap,
  FaUserMd,
  FaChalkboardTeacher,
  FaUserFriends,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

export default function HomePage() {
  const services = [
    { icon: <FaBrain className="text-3xl" />, title: "Personalized Counselling", desc: "One-on-one sessions with experienced mental health professionals", color: "#2563eb" },
    { icon: <FaCommentDots className="text-3xl" />, title: "Real-time Chat Support", desc: "Instant messaging for immediate emotional support", color: "#7c3aed" },
    { icon: <FaChartLine className="text-3xl" />, title: "Progress Tracking", desc: "Monitor your emotional wellbeing and growth", color: "#059669" },
    { icon: <FaClock className="text-3xl" />, title: "24/7 Crisis Support", desc: "Emergency help available anytime, anywhere", color: "#dc2626" },
    { icon: <FaUsers className="text-3xl" />, title: "Group Therapy Sessions", desc: "Connect with peers in a supportive environment", color: "#f59e0b" },
    { icon: <FaBook className="text-3xl" />, title: "Wellness Workshops", desc: "Learn coping strategies and life skills", color: "#0891b2" }
  ];

  const quickLinks = [
    { to: "/", label: "Home", icon: <FaHome className="mr-1" /> },
    { to: "/about", label: "About Us", icon: <FaInfoCircle className="mr-1" /> },
    { to: "/contact", label: "Contact", icon: <FaPhone className="mr-1" /> },
    { to: "/faq", label: "FAQs", icon: <FaQuestionCircle className="mr-1" /> },
    { to: "/privacy", label: "Privacy Policy", icon: <FaShieldAlt className="mr-1" /> },
    { to: "/terms", label: "Terms of Service", icon: <FaFileAlt className="mr-1" /> }
  ];

  const teamMembers = [
    { name: "Dr. Ahmed Noor", role: "Clinical Psychologist", icon: <FaUserMd className="text-4xl" />, desc: "15+ years of experience in student mental health" },
    { name: "Dr. Fatima Hassan", role: "Senior Counsellor", icon: <FaUserGraduate className="text-4xl" />, desc: "Specializing in anxiety and depression" },
    { name: "Mohamed Omar", role: "Student Support Specialist", icon: <FaChalkboardTeacher className="text-4xl" />, desc: "Passionate about student wellbeing" },
    { name: "Aisha Abdullahi", role: "Mental Health Advocate", icon: <FaUserFriends className="text-4xl" />, desc: "Peer support and community building" }
  ];

  const resources = [
    { title: "Crisis Helpline", desc: "24/7 emergency support for immediate help", icon: <FaPhoneAlt className="text-3xl" />, link: "/crisis" },
    { title: "Self-Help Guides", desc: "Downloadable resources for mental wellness", icon: <FaBook className="text-3xl" />, link: "/resources" },
    { title: "Student Stories", desc: "Real stories from students who found help", icon: <FaHeart className="text-3xl" />, link: "/stories" },
    { title: "Wellness Tips", desc: "Daily tips for maintaining mental health", icon: <FaCheckCircle className="text-3xl" />, link: "/tips" }
  ];

  const benefits = [
    { icon: <FaShieldAlt className="text-3xl" />, title: "100% Confidential", desc: "Your privacy is our priority. All sessions are completely confidential." },
    { icon: <FaUserMd className="text-3xl" />, title: "Expert Counsellors", desc: "Connect with licensed and experienced mental health professionals." },
    { icon: <FaClock className="text-3xl" />, title: "24/7 Availability", desc: "Get support whenever you need it, day or night." },
    { icon: <FaStar className="text-3xl" />, title: "Quality Care", desc: "We maintain the highest standards of mental health care." },
    { icon: <FaUserGraduate className="text-3xl" />, title: "Student-Centered", desc: "Designed specifically for students' unique needs." },
    { icon: <FaUsers className="text-3xl" />, title: "Community Support", desc: "Join a supportive community of students." }
  ];

  return (
    <div>
      {/* ================= STYLES ================= */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: #f4f6f8;
          color: #111827;
        }
        a {
          text-decoration: none;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
        }
        .card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }
        .section-title {
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin-bottom: 8px;
        }
        .section-subtitle {
          color: #6b7280;
          text-align: center;
          margin-bottom: 48px;
        }
        .gradient-text {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @media (max-width: 768px) {
          .section-title { font-size: 24px; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ================= NAVBAR ================= */}
      <nav style={{
        background: "white",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 50
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px"
        }}>
          <Link to="/" style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none"
          }}>
            <div style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "white",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px"
            }}>
              <FaBrain />
            </div>
            <span style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#111827"
            }}>
              Student<span style={{ color: "#2563eb" }}>Mental</span>
            </span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "#2563eb"}
                  onMouseLeave={(e) => e.target.style.color = "#6b7280"}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <Link to="/login" style={{
                fontSize: "14px",
                color: "#6b7280",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#f3f4f6";
                e.target.style.color = "#111827";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#6b7280";
              }}>
                Login
              </Link>
              <Link to="/signup" style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                padding: "8px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.02)";
                e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}>
                <FaCheckCircle className="text-sm" />
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
          borderRadius: "50%"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
          borderRadius: "50%"
        }}></div>

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
          position: "relative"
        }}>
          <div className="slide-in">
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>🧠 Student Mental Health</span>
            <h1 style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#111827",
              marginTop: "24px",
              lineHeight: "1.2"
            }}>
              Empowering Students
              <br />
              <span className="gradient-text">Mental Wellness</span>
            </h1>
            <p style={{
              fontSize: "18px",
              color: "#6b7280",
              marginTop: "16px",
              maxWidth: "480px",
              lineHeight: "1.6"
            }}>
              Empowering students with professional mental health support, 
              counselling services, and a caring community dedicated to your well-being.
            </p>
            <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
              <Link to="/signup" style={{
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                color: "white",
                padding: "12px 32px",
                borderRadius: "9999px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(37,99,235,0.25)"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.02)";
                e.target.style.boxShadow = "0 4px 16px rgba(37,99,235,0.35)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.25)";
              }}>
                <FaArrowRight />
                Get Started
              </Link>
              <Link to="/about" style={{
                background: "transparent",
                color: "#2563eb",
                padding: "12px 32px",
                borderRadius: "9999px",
                fontWeight: "600",
                border: "2px solid #2563eb",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#2563eb";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#2563eb";
              }}>
                Learn More
              </Link>
            </div>

            <div style={{
              display: "flex",
              gap: "24px",
              marginTop: "40px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaStar className="text-yellow-500 text-xl" />
                <div>
                  <div style={{ fontWeight: "600", color: "#111827" }}>4.9/5</div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>Student Rating</div>
                </div>
              </div>
              <div style={{ width: "1px", background: "#e5e7eb" }}></div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaUsers className="text-blue-500 text-xl" />
                <div>
                  <div style={{ fontWeight: "600", color: "#111827" }}>500+</div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>Students Helped</div>
                </div>
              </div>
              <div style={{ width: "1px", background: "#e5e7eb" }}></div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaStar className="text-yellow-500 text-xl" />
                <div>
                  <div style={{ fontWeight: "600", color: "#111827" }}>98%</div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{
                background: "#dbeafe",
                padding: "8px",
                borderRadius: "8px",
                color: "#2563eb"
              }}>
                <FaUsers className="text-xl" />
              </div>
              <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#111827" }}>Quick Support</h2>
              <span style={{
                marginLeft: "auto",
                padding: "4px 12px",
                background: "#dcfce7",
                color: "#16a34a",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: "600"
              }}>● Online</span>
            </div>
            <div>
              {[
                { label: "Active Counsellors", value: "12" },
                { label: "Today's Sessions", value: "34" },
                { label: "Appointments", value: "28" },
                { label: "Privacy Protected", value: "100%" }
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "16px 0",
                  borderBottom: "1px solid #f3f4f6"
                }}>
                  <span style={{ color: "#6b7280" }}>{item.label}</span>
                  <span style={{ fontWeight: "700", color: "#111827" }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: "24px",
              paddingTop: "24px",
              borderTop: "1px solid #f3f4f6",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <span style={{ fontSize: "12px", color: "#22c55e" }}>🟢</span>
              <span style={{ fontSize: "14px", color: "#6b7280" }}>All systems operational</span>
              <span style={{ marginLeft: "auto", fontSize: "12px", color: "#9ca3af" }}>Updated just now</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section style={{ padding: "64px 24px", background: "white" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>📊 OUR IMPACT</span>
            <h2 className="section-title">Making a <span className="gradient-text">Difference</span></h2>
            <p className="section-subtitle">Real numbers, real impact on student mental health</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px"
          }}>
            {[
              { value: "500+", label: "Students Helped", icon: <FaUserGraduate className="text-3xl" /> },
              { value: "50+", label: "Counsellors", icon: <FaUserMd className="text-3xl" /> },
              { value: "98%", label: "Satisfaction Rate", icon: <FaStar className="text-3xl" /> },
              { value: "24/7", label: "Support Available", icon: <FaClock className="text-3xl" /> }
            ].map((stat) => (
              <div key={stat.label} style={{
                textAlign: "center",
                padding: "32px 24px",
                background: "#f9fafb",
                borderRadius: "16px",
                transition: "all 0.3s",
                border: "1px solid transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#2563eb";
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "transparent";
                e.target.style.boxShadow = "none";
              }}>
                <div style={{ color: "#2563eb", marginBottom: "8px" }}>{stat.icon}</div>
                <div style={{ fontSize: "36px", fontWeight: "700", color: "#2563eb" }}>{stat.value}</div>
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section style={{ padding: "64px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>✨ OUR SERVICES</span>
            <h2 className="section-title">Comprehensive <span className="gradient-text">Mental Health</span> Support</h2>
            <p className="section-subtitle">We offer a range of services designed to support your mental wellness journey</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}>
            {services.map((service) => (
              <div key={service.title} className="card" style={{ padding: "32px" }}>
                <div style={{
                  display: "inline-block",
                  padding: "12px",
                  background: `${service.color}10`,
                  borderRadius: "12px",
                  color: service.color,
                  marginBottom: "12px"
                }}>{service.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{service.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px", lineHeight: "1.6" }}>{service.desc}</p>
                <Link to="/services" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  color: service.color,
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "12px",
                  textDecoration: "none",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.gap = "8px"}
                onMouseLeave={(e) => e.target.style.gap = "4px"}>
                  Learn More <FaArrowRight className="text-xs" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section style={{ padding: "64px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>💪 WHY CHOOSE US</span>
            <h2 className="section-title">Your Mental Health <span className="gradient-text">Matters to Us</span></h2>
            <p className="section-subtitle">We're committed to providing the best mental health support for students</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card" style={{ padding: "32px", textAlign: "center" }}>
                <div style={{
                  color: "#2563eb",
                  marginBottom: "12px"
                }}>{benefit.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{benefit.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px", lineHeight: "1.6" }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section style={{ padding: "64px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>🔄 HOW IT WORKS</span>
            <h2 className="section-title">Start Your <span className="gradient-text">Journey</span> in 4 Steps</h2>
            <p className="section-subtitle">Simple, straightforward process to get the help you need</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px"
          }}>
            {[
              { step: "01", title: "Create Account", desc: "Sign up in 2 minutes with your student email", icon: <FaUserGraduate className="text-3xl" /> },
              { step: "02", title: "Choose Counselor", desc: "Browse profiles and find your perfect match", icon: <FaUsers className="text-3xl" /> },
              { step: "03", title: "Book Session", desc: "Schedule at a time that works for you", icon: <FaCalendarCheck className="text-3xl" /> },
              { step: "04", title: "Start Healing", desc: "Begin your journey to mental wellness", icon: <FaHeart className="text-3xl" /> }
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 16px",
                  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(37,99,235,0.25)",
                  transition: "transform 0.3s"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                  {item.icon}
                </div>
                <div style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#2563eb",
                  marginBottom: "4px"
                }}>{item.step}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section style={{ padding: "64px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>👨‍⚕️ OUR TEAM</span>
            <h2 className="section-title">Meet Our <span className="gradient-text">Experts</span></h2>
            <p className="section-subtitle">Dedicated professionals committed to your mental wellness</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px"
          }}>
            {teamMembers.map((member) => (
              <div key={member.name} className="card" style={{ textAlign: "center", padding: "32px" }}>
                <div style={{
                  color: "#2563eb",
                  marginBottom: "12px"
                }}>{member.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{member.name}</h3>
                <p style={{ fontSize: "14px", color: "#2563eb", fontWeight: "500" }}>{member.role}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "8px", lineHeight: "1.5" }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESOURCES ================= */}
      <section style={{ padding: "64px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>📚 RESOURCES</span>
            <h2 className="section-title">Helpful <span className="gradient-text">Resources</span></h2>
            <p className="section-subtitle">Additional support and information for your mental health journey</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px"
          }}>
            {resources.map((resource) => (
              <Link key={resource.title} to={resource.link} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "32px", textAlign: "center", height: "100%" }}>
                  <div style={{
                    color: "#2563eb",
                    marginBottom: "12px"
                  }}>{resource.icon}</div>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{resource.title}</h3>
                  <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px", lineHeight: "1.6" }}>{resource.desc}</p>
                  <div style={{
                    marginTop: "16px",
                    color: "#2563eb",
                    fontSize: "14px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px"
                  }}>
                    Learn More <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section style={{ padding: "64px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>💬 TESTIMONIALS</span>
            <h2 className="section-title">What Our <span className="gradient-text">Community Says</span></h2>
            <p className="section-subtitle">Real stories from real students who found help</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}>
            {[
              { name: "Mohamed Omar", role: "Student", text: "The counselling services helped me overcome anxiety and perform better in my studies. I'm now more confident and focused.", icon: <FaUserGraduate className="text-4xl" />, rating: 5 },
              { name: "Fatuma Hassan", role: "Student", text: "I found a safe space to share my feelings. The counsellors are truly understanding and helped me navigate through difficult times.", icon: <FaUserFriends className="text-4xl" />, rating: 5 },
              { name: "Dr. Ahmed Noor", role: "Counsellor", text: "Seeing students transform and grow is the most rewarding part of my work. Every session brings new hope and healing.", icon: <FaUserMd className="text-4xl" />, rating: 5 }
            ].map((item) => (
              <div key={item.name} className="card" style={{ padding: "32px" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "12px", color: "#f59e0b" }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div style={{
                  color: "#2563eb",
                  marginBottom: "12px"
                }}>{item.icon}</div>
                <p style={{ color: "#6b7280", lineHeight: "1.6", fontStyle: "italic" }}>"{item.text}"</p>
                <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid #f3f4f6" }} />
                <div>
                  <h4 style={{ fontWeight: "700", color: "#111827" }}>{item.name}</h4>
                  <p style={{ fontSize: "14px", color: "#2563eb" }}>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section style={{ padding: "64px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>❓ FAQ</span>
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "Is counselling really confidential?", a: "Yes, absolutely. All counselling sessions are completely confidential within legal and ethical boundaries." },
              { q: "How do I book an appointment?", a: "You can book an appointment through your student dashboard. Select your preferred counsellor, date, and time." },
              { q: "Is the service free?", a: "Yes, all counselling services are completely free for Garissa University students." },
              { q: "What if I need help after hours?", a: "Our 24/7 emergency helpline is always available. Call +254 700 000 000 anytime." }
            ].map((faq, index) => (
              <div key={index} className="card" style={{ padding: "20px 24px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827" }}>{faq.q}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px", lineHeight: "1.6" }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link to="/faq" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#2563eb",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.gap = "12px"}
            onMouseLeave={(e) => e.target.style.gap = "8px"}>
              View All FAQs <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #2563eb, #7c3aed)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "500px",
          height: "500px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "-50%",
          left: "-20%",
          width: "500px",
          height: "500px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%"
        }}></div>

        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative"
        }}>
          <div style={{
            fontSize: "64px",
            marginBottom: "16px",
            display: "inline-block"
          }}>💚</div>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "white",
            marginBottom: "16px"
          }}>Your Mental Health Matters</h2>
          <p style={{
            fontSize: "18px",
            color: "#bfdbfe",
            marginBottom: "32px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            Join thousands of students finding hope, healing, and happiness through our support
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap"
          }}>
            <Link to="/signup" style={{
              background: "white",
              color: "#2563eb",
              padding: "14px 40px",
              borderRadius: "9999px",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}>
              <FaArrowRight />
              Start Your Journey
            </Link>
            <Link to="/contact" style={{
              border: "2px solid white",
              color: "white",
              padding: "14px 40px",
              borderRadius: "9999px",
              fontWeight: "700",
              textDecoration: "none",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "#2563eb";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "white";
            }}>
              Contact Us
            </Link>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "40px",
            flexWrap: "wrap"
          }}>
            <span style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#bfdbfe",
              fontSize: "14px"
            }}>
              <FaCheckCircle className="text-green-400" /> Free Registration
            </span>
            <span style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#bfdbfe",
              fontSize: "14px"
            }}>
              <FaCheckCircle className="text-green-400" /> Confidential & Private
            </span>
            <span style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#bfdbfe",
              fontSize: "14px"
            }}>
              <FaCheckCircle className="text-green-400" /> 24/7 Support Available
            </span>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={{
        background: "#111827",
        color: "white",
        padding: "48px 24px"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "32px"
        }}>
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <FaBrain className="text-blue-400" />
              Student<span style={{ color: "#60a5fa" }}>Mental</span>
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.6" }}>
              Empowering students with professional mental health support and counselling services.
            </p>
            <div style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px"
            }}>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#1f2937",
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#2563eb";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#1f2937";
                  e.target.style.color = "#9ca3af";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#1f2937",
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#2563eb";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#1f2937";
                  e.target.style.color = "#9ca3af";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#1f2937",
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#2563eb";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#1f2937";
                  e.target.style.color = "#9ca3af";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#1f2937",
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#2563eb";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#1f2937";
                  e.target.style.color = "#9ca3af";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#9ca3af",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "12px"
            }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.to} style={{ marginBottom: "8px" }}>
                  <Link to={link.to} style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "white"}
                  onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#9ca3af",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "12px"
            }}>
              Our Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {services.map((service) => (
                <li key={service.title} style={{ marginBottom: "8px" }}>
                  <Link to="/services" style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "white"}
                  onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
                    {service.icon}
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#9ca3af",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "12px"
            }}>
              Get In Touch
            </h3>
            <ul style={{ listStyle: "none", padding: 0, color: "#9ca3af", fontSize: "14px", lineHeight: "1.8" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaMapMarkerAlt className="text-blue-400" /> Garissa University, Kenya
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:support@studentmental.com" style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.color = "white"}
                onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
                  support@studentmental.com
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaPhoneAlt className="text-blue-400" />
                <a href="tel:+1234567890" style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.color = "white"}
                onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
                  +1 (234) 567-890
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaClock className="text-blue-400" /> 24/7 Support Available
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #1f2937",
          marginTop: "32px",
          paddingTop: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          color: "#9ca3af",
          fontSize: "14px"
        }}>
          <p style={{ margin: 0 }}>
            © 2026 Student Mental Health & Counselling | All Rights Reserved
          </p>
          <div style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}>
            <a href="#" style={{
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.color = "white"}
            onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
              Privacy Policy
            </a>
            <a href="#" style={{
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.color = "white"}
            onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
              Terms of Use
            </a>
            <a href="#" style={{
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.color = "white"}
            onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
              Cookie Policy
            </a>
          </div>
          <div>
            <p style={{
              margin: 0,
              color: "#60a5fa",
              fontWeight: "500",
              fontSize: "12px"
            }}>
              PREPARED BY: <span style={{ color: "#a78bfa", fontWeight: "700" }}>MASELO MOH</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}