import { Link } from 'react-router-dom';

export default function Contact() {
  const contactInfo = [
    { icon: "📍", title: "Location", detail: "Garissa University, Garissa, Kenya", color: "#2563eb" },
    { icon: "📧", title: "Email", detail: "support@studentmental.com", link: "mailto:support@studentmental.com", color: "#7c3aed" },
    { icon: "📞", title: "Phone", detail: "+1 (234) 567-890", link: "tel:+1234567890", color: "#059669" },
    { icon: "⏰", title: "Support Hours", detail: "24/7 Emergency Support", color: "#dc2626" }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f6f8"
    }}>
      {/* ================= HERO SECTION ================= */}
      <section style={{
        padding: "120px 24px 60px",
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
            📬
          </div>
          <h1 style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "12px"
          }}>
            Contact <span style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Us</span>
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#6b7280",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.7"
          }}>
            Get in touch with our support team. We're here to help you with any questions or concerns.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section style={{ padding: "60px 24px", background: "white" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px"
        }}>
          {contactInfo.map((info) => (
            <div key={info.title} style={{
              textAlign: "center",
              padding: "32px 24px",
              background: "#f9fafb",
              borderRadius: "16px",
              border: "1px solid #f3f4f6",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = info.color;
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
              e.target.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#f3f4f6";
              e.target.style.boxShadow = "none";
              e.target.style.transform = "translateY(0)";
            }}>
              <div style={{
                fontSize: "32px",
                marginBottom: "12px"
              }}>{info.icon}</div>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "4px"
              }}>{info.title}</h3>
              {info.link ? (
                <a href={info.link} style={{
                  fontSize: "14px",
                  color: info.color,
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.color = "#1d4ed8"}
                onMouseLeave={(e) => e.target.style.color = info.color}>
                  {info.detail}
                </a>
              ) : (
                <p style={{
                  fontSize: "14px",
                  color: "#6b7280"
                }}>{info.detail}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section style={{ padding: "60px 24px", background: "#f9fafb" }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <div style={{
            background: "white",
            padding: "48px",
            borderRadius: "16px",
            border: "1px solid #f3f4f6",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
          }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h2 style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "8px"
              }}>
                Send Us a <span style={{
                  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>Message</span>
              </h2>
              <p style={{
                color: "#6b7280",
                fontSize: "16px"
              }}>
                We'll get back to you within 24 hours
              </p>
            </div>

            <form>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px"
              }}>
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "6px"
                  }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
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
                    required
                  />
                </div>
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "6px"
                  }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
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
                    required
                  />
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <label style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "6px"
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
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
                  required
                />
              </div>

              <div style={{ marginTop: "20px" }}>
                <label style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "6px"
                }}>
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "#111827",
                    outline: "none",
                    transition: "all 0.2s",
                    boxSizing: "border-box",
                    background: "white",
                    fontFamily: "inherit",
                    resize: "vertical"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "14px",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "white",
                  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 12px rgba(37,99,235,0.25)",
                  marginTop: "24px"
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
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CRISIS SUPPORT ================= */}
      <section style={{
        padding: "60px 24px",
        background: "white"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #eff6ff, #faf5ff)",
            borderRadius: "16px",
            padding: "48px",
            textAlign: "center",
            border: "1px solid #e5e7eb"
          }}>
            <div style={{
              fontSize: "48px",
              marginBottom: "16px"
            }}>🆘</div>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "8px"
            }}>
              Need Immediate Help?
            </h3>
            <p style={{
              color: "#6b7280",
              marginBottom: "24px",
              fontSize: "16px",
              lineHeight: "1.6"
            }}>
              Our crisis support team is available 24/7 to provide immediate assistance.
              <br />
              <span style={{ fontWeight: "600", color: "#2563eb" }}>
                You are not alone. Help is here.
              </span>
            </p>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap"
            }}>
              <Link
                to="/crisis"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 40px",
                  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                  color: "white",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 12px rgba(37,99,235,0.25)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 8px 24px rgba(37,99,235,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.25)";
                }}
              >
                Get Help Now →
              </Link>
              <a
                href="tel:+1234567890"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 40px",
                  border: "2px solid #dc2626",
                  color: "#dc2626",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#dc2626";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#dc2626";
                }}
              >
                📞 Call Emergency
              </a>
            </div>
            <div style={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              flexWrap: "wrap",
              fontSize: "14px",
              color: "#6b7280"
            }}>
              <span>✅ Free & Confidential</span>
              <span>✅ 24/7 Support</span>
              <span>✅ Professional Help</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP / LOCATION ================= */}
      <section style={{ padding: "60px 24px", background: "#f9fafb" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{
            background: "white",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid #f3f4f6",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            textAlign: "center"
          }}>
            <div style={{
              fontSize: "40px",
              marginBottom: "12px"
            }}>📍</div>
            <h3 style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "8px"
            }}>
              Visit Us
            </h3>
            <p style={{
              color: "#6b7280",
              fontSize: "16px",
              marginBottom: "16px"
            }}>
              Garissa University, Garissa, Kenya
            </p>
            <div style={{
              background: "#f3f4f6",
              borderRadius: "12px",
              padding: "40px",
              color: "#9ca3af",
              fontSize: "14px",
              border: "1px dashed #d1d5db"
            }}>
              <span style={{ fontSize: "48px", display: "block", marginBottom: "8px" }}>🗺️</span>
              Map Location
              <br />
              <span style={{ fontSize: "12px" }}>Garissa University Campus, Counselling Center</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}