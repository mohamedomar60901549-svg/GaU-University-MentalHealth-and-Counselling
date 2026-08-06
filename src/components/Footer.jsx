export default function Footer() {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        `}
      </style>
      
      <footer style={{
        background: "white",
        color: "#4A4A5E",
        position: "relative",
        borderTop: "2px solid #2563eb",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
        marginTop: "auto",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.05)"
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: "absolute",
          bottom: "-50%",
          right: "-10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 10s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          top: "-30%",
          left: "-5%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 12s ease-in-out infinite reverse"
        }}></div>
        
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px 30px",
          position: "relative",
          zIndex: 2
        }}>
          {/* Main Footer Content */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px"
          }}>
            
            {/* About Section */}
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                  color: "white",
                  fontSize: "20px",
                  animation: "float 3s ease-in-out infinite"
                }}>
                  🧠
                </div>
                <h3 style={{
                  margin: 0,
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#111827"
                }}>
                  Student<span style={{ color: "#2563eb" }}>Mental</span>
                </h3>
              </div>
              <p style={{
                color: "#6B6B80",
                lineHeight: "1.6",
                fontSize: "14px",
                marginBottom: "15px"
              }}>
                Empowering students with professional mental health support, counselling services, and a caring community dedicated to your well-being.
              </p>
              <div style={{
                display: "flex",
                gap: "12px",
                marginTop: "15px"
              }}>
                {["📘", "🐦", "💼", "📷"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: "#f3f4f6",
                      color: "#6B6B80",
                      textDecoration: "none",
                      fontSize: "16px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "linear-gradient(135deg, #2563eb, #7c3aed)";
                      e.target.style.color = "white";
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#f3f4f6";
                      e.target.style.color = "#6B6B80";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#2563eb",
                borderLeft: "3px solid #7c3aed",
                paddingLeft: "12px"
              }}>
                Quick Links
              </h3>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {["Home", "About Us", "Contact", "FAQs", "Privacy Policy", "Terms of Service"].map((link, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    <a href="#" style={{
                      color: "#6B6B80",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                      display: "inline-block"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#2563eb";
                      e.target.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#6B6B80";
                      e.target.style.transform = "translateX(0)";
                    }}>
                      → {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#2563eb",
                borderLeft: "3px solid #7c3aed",
                paddingLeft: "12px"
              }}>
                Our Services
              </h3>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {["Personalized Counselling", "Real-time Chat Support", "Progress Tracking", "24/7 Crisis Support", "Group Therapy Sessions", "Wellness Workshops"].map((service, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    <a href="#" style={{
                      color: "#6B6B80",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                      display: "inline-block"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#2563eb";
                      e.target.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#6B6B80";
                      e.target.style.transform = "translateX(0)";
                    }}>
                      ✓ {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#2563eb",
                borderLeft: "3px solid #7c3aed",
                paddingLeft: "12px"
              }}>
                Get In Touch
              </h3>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "15px",
                  color: "#6B6B80",
                  fontSize: "14px",
                  lineHeight: "1.5"
                }}>
                  <span style={{ fontSize: "16px", marginTop: "1px" }}>📍</span>
                  <span>Garissa University, Garissa, Kenya</span>
                </li>
                <li style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                  color: "#6B6B80",
                  fontSize: "14px"
                }}>
                  <span style={{ fontSize: "16px" }}>📧</span>
                  <a href="mailto:support@studentmentalhealth.com" style={{
                    color: "#6B6B80",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "#2563eb"}
                  onMouseLeave={(e) => e.target.style.color = "#6B6B80"}>
                    support@studentmentalhealth.com
                  </a>
                </li>
                <li style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                  color: "#6B6B80",
                  fontSize: "14px"
                }}>
                  <span style={{ fontSize: "16px" }}>📞</span>
                  <a href="tel:+1234567890" style={{
                    color: "#6B6B80",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "#2563eb"}
                  onMouseLeave={(e) => e.target.style.color = "#6B6B80"}>
                    +1 (234) 567-890
                  </a>
                </li>
                <li style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                  color: "#6B6B80",
                  fontSize: "14px"
                }}>
                  <span style={{ fontSize: "16px" }}>⏰</span>
                  <span>24/7 Emergency Support Available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            fontSize: "12px",
            color: "#8B8BA0"
          }}>
            <div>
              <p style={{ margin: 0 }}>
                © 2026 Student Mental Health & Counselling | All Rights Reserved
              </p>
            </div>
            <div style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}>
              <a href="#" style={{
                color: "#8B8BA0",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#2563eb"}
              onMouseLeave={(e) => e.target.style.color = "#8B8BA0"}>
                Privacy Policy
              </a>
              <a href="#" style={{
                color: "#8B8BA0",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#2563eb"}
              onMouseLeave={(e) => e.target.style.color = "#8B8BA0"}>
                Terms of Use
              </a>
              <a href="#" style={{
                color: "#8B8BA0",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#2563eb"}
              onMouseLeave={(e) => e.target.style.color = "#8B8BA0"}>
                Cookie Policy
              </a>
            </div>
            <div>
              <p style={{ 
                margin: 0, 
                color: "#2563eb", 
                fontWeight: "500",
                fontSize: "12px"
              }}>
                PREPARED BY: <span style={{ fontWeight: "700", color: "#7c3aed" }}>MASELO MoH</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}