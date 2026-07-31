export default function Home() {
  return (
    <div style={{ 
      fontFamily: "'Inter', 'Poppins', 'Segoe UI', sans-serif",
      background: "linear-gradient(135deg, #FFF9F0 0%, #FFF4E5 100%)",
      minHeight: "100vh"
    }}>
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes zoomIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .card {
            background: white;
            border-radius: 24px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 35px rgba(0,0,0,0.1);
          }
          button {
            transition: all 0.2s ease;
            cursor: pointer;
          }
        `}
      </style>

      {/* HERO */}
      <div style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "linear-gradient(125deg, #FFF5E6 0%, #FFEED9 100%)",
      }}>
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, #FFD966 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #90EE90 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 10s ease-in-out infinite"
        }}></div>
        
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px", textAlign: "center", zIndex: 2 }}>
          <span style={{
            display: "inline-block",
            background: "#4CAF50",
            color: "white",
            padding: "6px 18px",
            borderRadius: "30px",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "25px"
          }}>
            ITS REAL GET HELP, HEAL FASTER
          </span>
          
          <h1 style={{
            fontSize: "clamp(42px, 7vw, 72px)",
            fontWeight: "800",
            marginBottom: "20px",
            color: "#1F2F2A",
            animation: "slideInLeft 0.6s ease-out"
          }}>
            Student Mental Health
            <br />
            <span style={{ color: "#FF8C42" }}>& Counselling</span>
          </h1>
          
          <p style={{
            fontSize: "18px",
            color: "#5A5A6E",
            maxWidth: "650px",
            margin: "0 auto 35px",
            lineHeight: "1.6",
            animation: "slideInRight 0.6s ease-out"
          }}>
            Connect with experienced counsellors, book appointments, 
            and get the support you need to thrive.
          </p>
          
          <div style={{
            display: "flex",
            gap: "18px",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "zoomIn 0.8s ease-out"
          }}>
            <a href="/signup">
              <button style={{
                padding: "14px 38px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "40px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(76,175,80,0.3)"
              }}
              onMouseEnter={(e) => e.target.style.background = "#45a049"}
              onMouseLeave={(e) => e.target.style.background = "#4CAF50"}>
                Start Your Journey
              </button>
            </a>
            <a href="/login">
              <button style={{
                padding: "14px 38px",
                background: "white",
                color: "#FF8C42",
                border: "2px solid #FF8C42",
                borderRadius: "40px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#FF8C42";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "white";
                e.target.style.color = "#FF8C42";
              }}>
                 Login
              </button>
            </a>
          </div>
          
          <div style={{
            marginTop: "55px",
            display: "flex",
            justifyContent: "center",
            gap: "45px",
            flexWrap: "wrap"
          }}>
            {[
              { value: "2+", label: "Expert Counsellors" },
              { value: "1K+", label: "Happy Students" },
              { value: "72%", label: "Success Rate" },
              { value: "24/7", label: "Always Available" }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "32px", fontWeight: "800", color: "#FF8C42" }}>{stat.value}</div>
                <div style={{ color: "#6B6B80", fontSize: "14px", fontWeight: "500" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ padding: "80px 20px", background: "white" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{
            background: "#E8F5E9",
            padding: "5px 14px",
            borderRadius: "30px",
            color: "#4CAF50",
            fontSize: "13px",
            fontWeight: "600"
          }}>
            ✨ FEATURES
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#1F2F2A", marginTop: "20px" }}>
            Everything You Need to <span style={{ color: "#FF8C42" }}>Thrive</span>
          </h2>
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {[
            { icon: "🎯", title: "Personalized Matching", desc: "Expert counselors matched to your needs" },
            { icon: "💬", title: "Real-time Chat", desc: "Instant messaging for immediate support" },
            { icon: "📊", title: "Progress Tracking", desc: "Monitor your emotional wellbeing" },
            { icon: "🔒", title: "100% Confidential", desc: "Bank-level encryption for privacy" },
            { icon: "🌙", title: "24/7 Support", desc: "Help available anytime, anywhere" },
            { icon: "📱", title: "Multi-Platform", desc: "Desktop, tablet, and mobile ready" }
          ].map((feature, i) => (
            <div key={i} className="card" style={{
              padding: "35px 25px",
              textAlign: "center",
              cursor: "pointer"
            }}>
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>{feature.icon}</div>
              <h3 style={{ fontSize: "22px", marginBottom: "12px", color: "#1F2F2A" }}>{feature.title}</h3>
              <p style={{ color: "#6B6B80", lineHeight: "1.5" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ padding: "80px 20px", background: "#FFF9F0" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{
            background: "#FFE5CC",
            padding: "5px 14px",
            borderRadius: "30px",
            color: "#FF8C42",
            fontSize: "13px",
            fontWeight: "600"
          }}>
            SIMPLE PROCESS
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#1F2F2A", marginTop: "20px" }}>
            Start in <span style={{ color: "#FF8C42" }}>4 Simple Steps</span>
          </h2>
        </div>
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {[
            { step: "1", title: "Create Account", desc: "Sign up in 2 minutes", icon: "📝" },
            { step: "2", title: "Choose Counselor", desc: "Browse expert profiles", icon: "👥" },
            { step: "3", title: "Book Session", desc: "Schedule at your time", icon: "📅" },
            { step: "4", title: "Start Healing", desc: "Begin your journey", icon: "💚" }
          ].map((step, i) => (
            <div key={i} style={{
              flex: "1",
              minWidth: "200px",
              textAlign: "center"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                background: "#FF8C42",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: "32px",
                color: "white"
              }}>{step.icon}</div>
              <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "#1F2F2A" }}>{step.title}</h3>
              <p style={{ color: "#6B6B80" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ padding: "80px 20px", background: "white" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{
            background: "#E8F5E9",
            padding: "5px 14px",
            borderRadius: "30px",
            color: "#4CAF50",
            fontSize: "13px",
            fontWeight: "600"
          }}>
            💬 TESTIMONIALS
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#1F2F2A", marginTop: "20px" }}>
            What Our <span style={{ color: "#FF8C42" }}>Community Says</span>
          </h2>
        </div>
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {[
            { name: "Dr. Abdifatah Ibrahim", role: "Senior Counsellor", text: "This platform has revolutionized how I connect with students.", icon: "👨‍⚕️" },
            { name: "Jamal Buthul", role: "Engineering Student", text: "The real-time chat feature was a game-changer for me.", icon: "👨‍🎓" },
            { name: "Dr. Yussuf Gab", role: "Clinical Psychologist", text: "I've seen remarkable transformations in my students.", icon: "👨‍⚕️" }
          ].map((item, i) => (
            <div key={i} className="card" style={{
              padding: "30px",
              width: "320px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ fontSize: "48px" }}>{item.icon}</div>
                <div>
                  <h4 style={{ color: "#FF8C42", marginBottom: "3px" }}>{item.name}</h4>
                  <p style={{ fontSize: "12px", color: "#8B8BA0" }}>{item.role}</p>
                </div>
              </div>
              <p style={{ color: "#4A4A60", lineHeight: "1.5", marginBottom: "15px" }}>"{item.text}"</p>
              <div style={{ color: "#FFB347" }}>⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT US */}
      <div style={{ padding: "80px 20px", background: "#FFF9F0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <span style={{
            background: "#E8F5E9",
            padding: "5px 14px",
            borderRadius: "30px",
            color: "#4CAF50",
            fontSize: "13px",
            fontWeight: "600"
          }}>
            ℹ️ ABOUT US
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", color: "#1F2F2A", margin: "25px 0 20px" }}>
            Empowering Students <span style={{ color: "#FF8C42" }}>Worldwide</span>
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#5A5A70", marginBottom: "35px" }}>
            The Student Mental Health & Counselling platform was founded to make professional mental health 
            support accessible to every student. We believe emotional well-being is the foundation of academic success.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
            {["🎯 Mission-Driven", "🏆 Award-Winning", "🌍 Global Community", "💚 Student-First", "⭐ 5-Star Rated"].map((badge, i) => (
              <span key={i} style={{
                background: "#E8F5E9",
                padding: "6px 18px",
                borderRadius: "30px",
                color: "#4CAF50",
                fontSize: "13px",
                fontWeight: "500"
              }}>{badge}</span>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #FF8C42, #FFB347)",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: "800",
          marginBottom: "20px",
          color: "white"
        }}>
          Ready to Transform Your Life?
        </h2>
        <p style={{ fontSize: "18px", color: "white", maxWidth: "550px", margin: "0 auto 35px", opacity: 0.95 }}>
          Join thousands of students finding hope, healing, and happiness
        </p>
        <a href="/signup">
          <button style={{
            padding: "16px 48px",
            background: "white",
            color: "#FF8C42",
            border: "none",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
          }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
            Start Your Journey Now 
          </button>
        </a>
      </div>

      {/* FOOTER */}
      <div style={{
        background: "#1F2F2A",
        padding: "40px 20px",
        color: "#B0B0B0",
        textAlign: "center"
      }}>
        <p>© 2026 Student Mental Health & Counselling | Empowering Student Wellness</p>
        <p style={{ marginTop: "12px", fontSize: "13px" }}>
          🌱 Built with React.js | Modern UI/UX Design
        </p>
      </div>

    </div>
  );
}