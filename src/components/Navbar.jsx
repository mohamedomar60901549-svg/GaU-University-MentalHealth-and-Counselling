import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("activeStudent");
    window.location.href = "/";
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        background: "white",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid #FF8C42",
        position: "relative",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        width: "100%",
        boxSizing: "border-box"
      }}>
        {/* LOGO */}
        <Link to="/" style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none"
        }}>
          <span style={{
            fontSize: "32px",
            animation: "float 3s ease-in-out infinite",
            display: "inline-block"
          }}>🎓</span>
          <h2 style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #FF8C42 0%, #4CAF50 60%, #FFB347 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Student Mental Health
          </h2>
        </Link>

        {/* NAV LINKS */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}>
          <Link 
            to="/" 
            style={{
              color: "#4A4A5E",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "15px",
              padding: "8px 12px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#FF8C42";
              e.target.style.background = "#FFF3E8";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#4A4A5E";
              e.target.style.background = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            🏠 Home
          </Link>

          {!user && (
            <>
              <Link 
                to="/login" 
                style={{
                  color: "#4A4A5E",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "15px",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#FF8C42";
                  e.target.style.background = "#FFF3E8";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#4A4A5E";
                  e.target.style.background = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                🔐 Login
              </Link>
              <Link 
                to="/signup" 
                style={{
                  color: "#4A4A5E",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "15px",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#FF8C42";
                  e.target.style.background = "#FFF3E8";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#4A4A5E";
                  e.target.style.background = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                ✨ Signup
              </Link>
            </>
          )}

          {user && user.role === "student" && (
            <Link 
              to="/student" 
              style={{
                color: "#4A4A5E",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "15px",
                padding: "8px 12px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#FF8C42";
                e.target.style.background = "#FFF3E8";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#4A4A5E";
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              📊 Dashboard
            </Link>
          )}

          {user && user.role === "counsellor" && (
            <Link 
              to="/counsellor" 
              style={{
                color: "#4A4A5E",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "15px",
                padding: "8px 12px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#FF8C42";
                e.target.style.background = "#FFF3E8";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#4A4A5E";
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              📊 Dashboard
            </Link>
          )}

          {user && (
            <button 
              onClick={logout} 
              style={{
                background: "linear-gradient(135deg, #FF8C42, #FFB347)",
                color: "white",
                border: "none",
                padding: "8px 20px",
                borderRadius: "25px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 2px 8px rgba(255,140,66,0.3)"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 0 15px rgba(255,140,66,0.5)";
                e.target.style.background = "linear-gradient(135deg, #4CAF50, #45a049)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 2px 8px rgba(255,140,66,0.3)";
                e.target.style.background = "linear-gradient(135deg, #FF8C42, #FFB347)";
              }}
            >
              🚪 Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
}