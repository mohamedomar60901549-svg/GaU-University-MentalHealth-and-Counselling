export default function Footer() {
  return (
    <footer style={{
      background: "#111827",
      color: "white",
      padding: "48px 24px",
      marginTop: "auto"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "32px"
        }}>
          <div>
            <h2 style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                color: "white",
                fontSize: "16px"
              }}>🧠</span>
              Student<span style={{ color: "#60a5fa" }}>Mental</span>
            </h2>
            <p style={{
              color: "#9ca3af",
              fontSize: "14px",
              lineHeight: "1.6"
            }}>
              Empowering students with professional mental health support and counselling services.
            </p>
            <div style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px"
            }}>
              {["📘", "🐦", "📸", "🔗"].map((icon, i) => (
                <a
                  key={i}
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
                    transition: "all 0.3s ease",
                    fontSize: "16px"
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
                  {icon}
                </a>
              ))}
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
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0
            }}>
              {["Home", "About Us", "Contact", "FAQs", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link} style={{ marginBottom: "8px" }}>
                  <a href="#" style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "white"}
                  onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
                    {link}
                  </a>
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
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0
            }}>
              {[
                "Personalized Counselling",
                "Real-time Chat Support",
                "Progress Tracking",
                "24/7 Crisis Support",
                "Group Therapy Sessions",
                "Wellness Workshops"
              ].map((service) => (
                <li key={service} style={{ marginBottom: "8px" }}>
                  <a href="#" style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "white"}
                  onMouseLeave={(e) => e.target.style.color = "#9ca3af"}>
                    {service}
                  </a>
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
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#9ca3af",
              fontSize: "14px",
              lineHeight: "1.8"
            }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
                <span>📍</span>
                <span>Garissa University, Garissa, Kenya</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span>📧</span>
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
              <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span>📞</span>
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
                <span>⏰</span>
                <span>24/7 Support Available</span>
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
      </div>
    </footer>
  );
}