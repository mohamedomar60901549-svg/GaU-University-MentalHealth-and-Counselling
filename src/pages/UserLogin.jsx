import { useState } from "react";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      console.log("Attempting login for:", email);
      console.log("Fetching from JSON Server on port 3000...");
      
      // JSON Server runs on port 3000 by default
      const response = await fetch("http://localhost:3000/users");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Users fetched from JSON Server:", data);
      
      const user = data.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        alert("Invalid credentials. Please check your email and password.");
        setLoading(false);
        return;
      }

      console.log("Login successful:", user);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "student") {
        window.location.href = "/student";
      } else {
        window.location.href = "/counsellor";
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to connect to JSON Server. Please make sure it's running on http://localhost:3000\n\nTo start JSON Server, run: json-server --watch db.json --port 3000");
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #FFF9F0 0%, #FFF3E0 100%)",
      padding: "40px 20px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Background Elements - Bright and Warm */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "10%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(76,175,80,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "10%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(255,140,66,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 10s ease-in-out infinite reverse"
      }}></div>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(255,180,66,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        animation: "pulseGlow 8s ease-in-out infinite"
      }}></div>
      
      <div style={{
        maxWidth: "450px",
        width: "100%",
        background: "white",
        borderRadius: "24px",
        padding: "40px",
        border: "1px solid rgba(255, 140, 66, 0.2)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
        position: "relative",
        zIndex: 2
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div style={{
            fontSize: "48px",
            marginBottom: "10px"
          }}>🎓</div>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            margin: "0 0 10px 0",
            background: "linear-gradient(135deg, #FF8C42 0%, #4CAF50 60%, #FFB347 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Welcome Back
          </h2>
          <p style={{
            color: "#6B6B80",
            fontSize: "14px",
            margin: 0
          }}>
            Login to continue your wellness journey
          </p>
        </div>

        {/* Form */}
        <div>
          {/* Demo Credentials Info */}
          <div style={{
            background: "#FFF9F0",
            padding: "12px",
            borderRadius: "12px",
            marginBottom: "20px",
            textAlign: "center",
            border: "1px solid rgba(255,140,66,0.2)"
          }}>
            <p style={{ margin: 0, fontSize: "12px", color: "#FF8C42", fontWeight: "500" }}>
              📌 Demo Credentials:
            </p>
            <p style={{ margin: "5px 0 0 0", fontSize: "11px", color: "#6B6B80" }}>
              Student: student@example.com / 123456<br />
              Counsellor: counsellor@example.com / 123456
            </p>
            <p style={{ margin: "5px 0 0 0", fontSize: "10px", color: "#8B8BA0" }}>
              💡 JSON Server must be running on port 3000
            </p>
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#4A4A5E",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              📧 Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                background: "white",
                color: "#4A4A5E",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.3s ease",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid #FF8C42";
                e.target.style.boxShadow = "0 0 8px rgba(255,140,66,0.3)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid rgba(255, 140, 66, 0.3)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#4A4A5E",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              🔒 Password
            </label>
            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                background: "white",
                color: "#4A4A5E",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.3s ease",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid #FF8C42";
                e.target.style.boxShadow = "0 0 8px rgba(255,140,66,0.3)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid rgba(255, 140, 66, 0.3)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Show/Hide Password Button */}
          <div style={{ marginBottom: "25px" }}>
            <button
              type="button"
              onClick={() => setShow(!show)}
              style={{
                background: "#FFF9F0",
                color: "#FF8C42",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                padding: "8px 16px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#FF8C42";
                e.target.style.color = "white";
                e.target.style.border = "1px solid #FF8C42";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#FFF9F0";
                e.target.style.color = "#FF8C42";
                e.target.style.border = "1px solid rgba(255, 140, 66, 0.3)";
              }}
            >
              {show ? "🙈 Hide Password" : "👁️ Show Password"}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={login}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "linear-gradient(135deg, #CCCCCC, #BBBBBB)" : "linear-gradient(135deg, #FF8C42, #FFB347)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              marginBottom: "20px",
              opacity: loading ? 0.7 : 1
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 5px 20px rgba(255,140,66,0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }
            }}
          >
            {loading ? "⏳ Logging in..." : "🔐 Login"}
          </button>

          {/* Forgot Password & Signup Links */}
          <div style={{
            textAlign: "center",
            paddingTop: "20px",
            borderTop: "1px solid rgba(0,0,0,0.08)"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px"
            }}>
              <a
                href="#"
                style={{
                  color: "#8B8BA0",
                  textDecoration: "none",
                  fontSize: "13px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#FF8C42";
                  e.target.style.transform = "translateX(-2px)";
                  e.target.style.display = "inline-block";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#8B8BA0";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                Forgot Password?
              </a>
              <p style={{
                color: "#6B6B80",
                fontSize: "13px",
                margin: 0
              }}>
                Don't have an account?{' '}
                <a
                  href="/signup"
                  style={{
                    color: "#FF8C42",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#4CAF50";
                    e.target.style.transform = "translateX(2px)";
                    e.target.style.display = "inline-block";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#FF8C42";
                    e.target.style.transform = "translateX(0)";
                  }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
        `}
      </style>
    </div>
  );
}