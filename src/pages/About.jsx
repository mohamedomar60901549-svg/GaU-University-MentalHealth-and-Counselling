export default function About() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#f4f6f8",
      padding: "120px 20px 80px"
    }}>
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto" 
      }}>
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "48px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          border: "1px solid #f3f4f6"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            borderRadius: "50%",
            color: "white",
            fontSize: "32px"
          }}>
            🧠
          </div>
          <h1 style={{ 
            fontSize: "36px", 
            fontWeight: "700", 
            color: "#111827", 
            textAlign: "center",
            marginBottom: "16px"
          }}>
            About Us
          </h1>
          <p style={{ 
            fontSize: "18px", 
            color: "#6b7280", 
            textAlign: "center",
            marginBottom: "32px",
            lineHeight: "1.7"
          }}>
            Learn more about Student Mental Health & Counselling
          </p>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "24px"
          }}>
            <div style={{
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>🎯</div>
              <h3 style={{ fontWeight: "600", color: "#111827" }}>Our Mission</h3>
              <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px" }}>
                To provide accessible mental health support to every student
              </p>
            </div>
            <div style={{
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>👁️</div>
              <h3 style={{ fontWeight: "600", color: "#111827" }}>Our Vision</h3>
              <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px" }}>
                A world where mental health is prioritized in education
              </p>
            </div>
            <div style={{
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>💚</div>
              <h3 style={{ fontWeight: "600", color: "#111827" }}>Our Values</h3>
              <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px" }}>
                Confidentiality, Empathy, and Professional Care
              </p>
            </div>
            <div style={{
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>🌟</div>
              <h3 style={{ fontWeight: "600", color: "#111827" }}>Our Commitment</h3>
              <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px" }}>
                Supporting students through every challenge
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
