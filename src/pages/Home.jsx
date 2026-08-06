import { Link } from 'react-router-dom';

export default function HomePage() {
  const services = [
    { icon: "🧠", title: "Personalized Counselling", desc: "One-on-one sessions with experienced mental health professionals" },
    { icon: "💬", title: "Real-time Chat Support", desc: "Instant messaging for immediate emotional support" },
    { icon: "📈", title: "Progress Tracking", desc: "Monitor your emotional wellbeing and growth" },
    { icon: "🕐", title: "24/7 Crisis Support", desc: "Emergency help available anytime, anywhere" },
    { icon: "👥", title: "Group Therapy Sessions", desc: "Connect with peers in a supportive environment" },
    { icon: "📚", title: "Wellness Workshops", desc: "Learn coping strategies and life skills" }
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQs" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" }
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
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .btn-primary {
          background: #2563eb;
          color: white;
          padding: 12px 32px;
          border-radius: 9999px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover {
          background: #1d4ed8;
          transform: scale(1.02);
        }
        .btn-secondary {
          background: transparent;
          color: #2563eb;
          padding: 12px 32px;
          border-radius: 9999px;
          font-weight: 600;
          border: 2px solid #2563eb;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-secondary:hover {
          background: #2563eb;
          color: white;
        }
        .card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          border: 1px solid #f3f4f6;
          transition: all 0.2s;
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
          {/* Logo */}
          <Link to="/" style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none"
          }}>
            <div style={{
              background: "#2563eb",
              color: "white",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px"
            }}>🧠</div>
            <span style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#111827"
            }}>
              Student<span style={{ color: "#2563eb" }}>Mental</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
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
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "#2563eb"}
                  onMouseLeave={(e) => e.target.style.color = "#6b7280"}
                >
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
                background: "#2563eb",
                padding: "8px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.target.style.background = "#1d4ed8"}
              onMouseLeave={(e) => e.target.style.background = "#2563eb"}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center"
        }}>
          <div>
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
              <span style={{ color: "#2563eb" }}>Mental Wellness</span>
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
              <Link to="/signup" className="btn-primary">
                Get Started →
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>

          <div className="card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{
                background: "#dbeafe",
                padding: "8px",
                borderRadius: "8px",
                fontSize: "20px"
              }}>👥</div>
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
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section style={{ padding: "64px 24px", background: "white" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px"
        }}>
          {[
            { value: "500+", label: "Students Helped" },
            { value: "50+", label: "Counsellors" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Available" }
          ].map((stat) => (
            <div key={stat.label} style={{
              textAlign: "center",
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "12px"
            }}>
              <div style={{ fontSize: "36px", fontWeight: "700", color: "#2563eb" }}>{stat.value}</div>
              <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section style={{ padding: "64px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive mental health support for students</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}>
            {services.map((service) => (
              <div key={service.title} className="card">
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{service.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{service.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px", lineHeight: "1.6" }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section style={{ padding: "64px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Start your journey in 4 simple steps</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px"
          }}>
            {[
              { step: "01", title: "Create Account", desc: "Sign up in 2 minutes" },
              { step: "02", title: "Choose Counselor", desc: "Browse expert profiles" },
              { step: "03", title: "Book Session", desc: "Schedule at your time" },
              { step: "04", title: "Start Healing", desc: "Begin your journey" }
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center" }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  margin: "0 auto 16px",
                  background: "#2563eb",
                  color: "white",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "700"
                }}>{item.step}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section style={{ padding: "64px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What our community says</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}>
            {[
              { name: "Mohamed Omar", role: "Student", text: "The counselling services helped me overcome anxiety and perform better in my studies.", icon: "👨‍🎓" },
              { name: "Fatuma Hassan", role: "Student", text: "I found a safe space to share my feelings. The counsellors are truly understanding.", icon: "👩‍🎓" },
              { name: "Dr. Ahmed Noor", role: "Counsellor", text: "Seeing students transform and grow is the most rewarding part of my work.", icon: "👨‍⚕️" }
            ].map((item) => (
              <div key={item.name} className="card">
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
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

      {/* ================= CTA ================= */}
      <section style={{
        padding: "64px 24px",
        background: "#2563eb"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "white" }}>Your Mental Health Matters</h2>
          <p style={{ color: "#bfdbfe", marginTop: "16px" }}>
            Join thousands of students finding hope, healing, and happiness
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "32px",
            flexWrap: "wrap"
          }}>
            <Link to="/signup" style={{
              background: "white",
              color: "#2563eb",
              padding: "12px 32px",
              borderRadius: "9999px",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#f3f4f6";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "white";
              e.target.style.transform = "scale(1)";
            }}>
              Start Your Journey
            </Link>
            <Link to="/contact" style={{
              border: "2px solid white",
              color: "white",
              padding: "12px 32px",
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
            <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>🧠 StudentMental</h2>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.6" }}>
              Empowering students with professional mental health support and counselling services.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.to} style={{ marginBottom: "8px" }}>
                  <Link to={link.to} style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "white"}
                  onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Our Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {services.map((service) => (
                <li key={service.title} style={{ marginBottom: "8px" }}>
                  <Link to="/services" style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "white"}
                  onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Contact
            </h3>
            <ul style={{ listStyle: "none", padding: 0, color: "#9ca3af", fontSize: "14px", lineHeight: "1.8" }}>
              <li>📍 Garissa University</li>
              <li>📧 support@studentmental.com</li>
              <li>📞 +1 (234) 567-890</li>
              <li>🕐 24/7 Support Available</li>
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