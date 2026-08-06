import { Link } from 'react-router-dom';

export default function Contact() {
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
            📬
          </div>
          <h1 style={{ 
            fontSize: "36px", 
            fontWeight: "700", 
            color: "#111827", 
            textAlign: "center",
            marginBottom: "16px"
          }}>
            Contact Us
          </h1>
          <p style={{ 
            fontSize: "18px", 
            color: "#6b7280", 
            textAlign: "center",
            marginBottom: "32px"
          }}>
            Get in touch with our support team
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginBottom: "32px"
          }}>
            <div style={{
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>📍</div>
              <h4 style={{ fontWeight: "600", color: "#111827", fontSize: "14px" }}>Location</h4>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>Garissa University, Kenya</p>
            </div>
            <div style={{
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>📧</div>
              <h4 style={{ fontWeight: "600", color: "#111827", fontSize: "14px" }}>Email</h4>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>support@studentmental.com</p>
            </div>
            <div style={{
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>📞</div>
              <h4 style={{ fontWeight: "600", color: "#111827", fontSize: "14px" }}>Phone</h4>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>+1 (234) 567-890</p>
            </div>
            <div style={{
              padding: "24px",
              background: "#f9fafb",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>⏰</div>
              <h4 style={{ fontWeight: "600", color: "#111827", fontSize: "14px" }}>Support Hours</h4>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>24/7 Emergency Support</p>
            </div>
          </div>

          <div style={{
            background: "linear-gradient(135deg, #eff6ff, #faf5ff)",
            borderRadius: "12px",
            padding: "32px",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
              Need Immediate Help?
            </h3>
            <p style={{ color: "#6b7280", marginBottom: "16px" }}>
              Our crisis support team is available 24/7
            </p>
            <Link
              to="/crisis"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 32px",
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                color: "white",
                borderRadius: "9999px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.02)";
                e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              Get Help Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
