import { Link } from 'react-router-dom';
import { 
  FaBrain, 
  FaHeart, 
  FaUsers, 
  FaStar, 
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaUserMd,
  FaGraduationCap,
  FaHandsHelping,
  FaBullseye,
  FaEye,
  FaUserFriends,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaQuestionCircle,
  FaFileAlt
} from 'react-icons/fa';

export default function About() {
  const values = [
    { icon: <FaShieldAlt className="text-3xl" />, title: "Confidentiality", desc: "Your privacy is our priority. All sessions are completely confidential." },
    { icon: <FaHeart className="text-3xl" />, title: "Empathy", desc: "We understand and share your feelings with genuine care and compassion." },
    { icon: <FaUserMd className="text-3xl" />, title: "Professional Care", desc: "Licensed professionals providing the highest quality mental health care." },
    { icon: <FaHandsHelping className="text-3xl" />, title: "Supportive Environment", desc: "A safe space where you can express yourself without judgment." }
  ];

  const teamMembers = [
    { name: "Dr. Ahmed Noor", role: "Clinical Psychologist", desc: "15+ years of experience in student mental health", icon: <FaUserMd className="text-4xl" /> },
    { name: "Dr. Fatima Hassan", role: "Senior Counsellor", desc: "Specializing in anxiety and depression", icon: <FaGraduationCap className="text-4xl" /> },
    { name: "Mohamed Omar", role: "Student Support Specialist", desc: "Passionate about student wellbeing", icon: <FaUserFriends className="text-4xl" /> },
    { name: "Aisha Abdullahi", role: "Mental Health Advocate", desc: "Peer support and community building", icon: <FaHandsHelping className="text-4xl" /> }
  ];

  const stats = [
    { value: "500+", label: "Students Helped", icon: <FaUsers className="text-3xl" /> },
    { value: "98%", label: "Satisfaction Rate", icon: <FaStar className="text-3xl" /> },
    { value: "50+", label: "Expert Counsellors", icon: <FaUserMd className="text-3xl" /> },
    { value: "24/7", label: "Support Available", icon: <FaClock className="text-3xl" /> }
  ];

  const quickLinks = [
    { to: "/", label: "Home", icon: <FaHome className="mr-1" /> },
    { to: "/about", label: "About Us", icon: <FaInfoCircle className="mr-1" /> },
    { to: "/contact", label: "Contact", icon: <FaPhone className="mr-1" /> },
    { to: "/faq", label: "FAQs", icon: <FaQuestionCircle className="mr-1" /> },
    { to: "/privacy", label: "Privacy Policy", icon: <FaShieldAlt className="mr-1" /> },
    { to: "/terms", label: "Terms of Service", icon: <FaFileAlt className="mr-1" /> }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f6f8"
    }}>
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

      {/* ================= HERO SECTION ================= */}
      <section style={{
        padding: "80px 24px 60px",
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
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          textAlign: "center"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            margin: "0 auto 20px",
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            borderRadius: "50%",
            color: "white",
            fontSize: "36px",
            boxShadow: "0 8px 24px rgba(37,99,235,0.25)"
          }}>
            <FaBrain />
          </div>
          <h1 style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "12px"
          }}>
            About <span style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Student Mental Health</span>
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#6b7280",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.7"
          }}>
            Empowering students with professional mental health support, counselling services, 
            and a caring community dedicated to your well-being.
          </p>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section style={{ padding: "60px 24px", background: "white" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px"
        }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{
              textAlign: "center",
              padding: "32px 24px",
              background: "#f9fafb",
              borderRadius: "16px",
              border: "1px solid #f3f4f6",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#2563eb";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
              e.target.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#f3f4f6";
              e.target.style.boxShadow = "none";
              e.target.style.transform = "translateY(0)";
            }}>
              <div style={{ color: "#2563eb", marginBottom: "8px" }}>{stat.icon}</div>
              <div style={{ fontSize: "36px", fontWeight: "700", color: "#2563eb" }}>{stat.value}</div>
              <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section style={{ padding: "60px 24px", background: "#f9fafb" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px"
        }}>
          <div style={{
            background: "white",
            padding: "40px",
            borderRadius: "16px",
            border: "1px solid #f3f4f6",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            textAlign: "center"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              margin: "0 auto 16px",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              borderRadius: "50%",
              color: "white",
              fontSize: "28px"
            }}>
              <FaBullseye />
            </div>
            <h2 style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "12px"
            }}>Our Mission</h2>
            <p style={{
              color: "#6b7280",
              lineHeight: "1.7",
              fontSize: "16px"
            }}>
              To provide accessible, professional, and compassionate mental health support 
              to every student, empowering them to thrive academically and personally.
            </p>
          </div>

          <div style={{
            background: "white",
            padding: "40px",
            borderRadius: "16px",
            border: "1px solid #f3f4f6",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            textAlign: "center"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              margin: "0 auto 16px",
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              borderRadius: "50%",
              color: "white",
              fontSize: "28px"
            }}>
              <FaEye />
            </div>
            <h2 style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "12px"
            }}>Our Vision</h2>
            <p style={{
              color: "#6b7280",
              lineHeight: "1.7",
              fontSize: "16px"
            }}>
              A world where mental health is prioritized in education, and every student 
              has access to the support they need to flourish.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section style={{ padding: "60px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 16px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>💎 OUR VALUES</span>
            <h2 style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
              marginTop: "12px"
            }}>
              What We <span style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Stand For</span>
            </h2>
            <p style={{ color: "#6b7280", marginTop: "8px" }}>
              Our core values guide everything we do
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px"
          }}>
            {values.map((value) => (
              <div key={value.title} style={{
                background: "#f9fafb",
                padding: "32px 24px",
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #f3f4f6",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#2563eb";
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                e.target.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#f3f4f6";
                e.target.style.boxShadow = "none";
                e.target.style.transform = "translateY(0)";
              }}>
                <div style={{ color: "#2563eb", marginBottom: "12px" }}>{value.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{value.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px", lineHeight: "1.6" }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section style={{ padding: "60px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 16px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>👨‍⚕️ OUR TEAM</span>
            <h2 style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
              marginTop: "12px"
            }}>
              Meet Our <span style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Experts</span>
            </h2>
            <p style={{ color: "#6b7280", marginTop: "8px" }}>
              Dedicated professionals committed to your mental wellness
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px"
          }}>
            {teamMembers.map((member) => (
              <div key={member.name} style={{
                background: "white",
                padding: "32px 24px",
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #f3f4f6",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                e.target.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                e.target.style.transform = "translateY(0)";
              }}>
                <div style={{ color: "#2563eb", marginBottom: "12px" }}>{member.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{member.name}</h3>
                <p style={{ fontSize: "14px", color: "#2563eb", fontWeight: "500" }}>{member.role}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "8px", lineHeight: "1.5" }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section style={{ padding: "60px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block",
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 16px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600"
            }}>🌟 WHY CHOOSE US</span>
            <h2 style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
              marginTop: "12px"
            }}>
              Why Students <span style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Trust Us</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}>
            {[
              { icon: <FaShieldAlt className="text-3xl" />, title: "100% Confidential", desc: "Your privacy is our priority. All sessions are completely confidential." },
              { icon: <FaUserMd className="text-3xl" />, title: "Expert Counsellors", desc: "Connect with licensed and experienced mental health professionals." },
              { icon: <FaClock className="text-3xl" />, title: "24/7 Availability", desc: "Get support whenever you need it, day or night." },
              { icon: <FaStar className="text-3xl" />, title: "Quality Care", desc: "We maintain the highest standards of mental health care." },
              { icon: <FaGraduationCap className="text-3xl" />, title: "Student-Centered", desc: "Designed specifically for students' unique needs." },
              { icon: <FaUsers className="text-3xl" />, title: "Community Support", desc: "Join a supportive community of students." }
            ].map((benefit) => (
              <div key={benefit.title} style={{
                background: "#f9fafb",
                padding: "32px 24px",
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #f3f4f6",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#2563eb";
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                e.target.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#f3f4f6";
                e.target.style.boxShadow = "none";
                e.target.style.transform = "translateY(0)";
              }}>
                <div style={{ color: "#2563eb", marginBottom: "12px" }}>{benefit.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{benefit.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px", lineHeight: "1.6" }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #2563eb, #7c3aed)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{
            fontSize: "48px",
            marginBottom: "16px"
          }}>💚</div>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "white",
            marginBottom: "16px"
          }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{
            fontSize: "18px",
            color: "#bfdbfe",
            marginBottom: "32px"
          }}>
            Join thousands of students who have found hope and healing through our support
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
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}>
              Get Started
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
              {values.map((value) => (
                <li key={value.title} style={{ marginBottom: "8px" }}>
                  <Link to="/services" style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "white"}
                  onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
                    {value.title}
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
          textAlign: "center",
          color: "#9ca3af",
          fontSize: "14px"
        }}>
          <p>© 2026 Student Mental Health & Counselling | All Rights Reserved</p>
          <p style={{ fontSize: "12px", marginTop: "4px", color: "#6b7280" }}>PREPARED BY: MASELO MOH</p>
        </div>
      </footer>
    </div>
  );
}