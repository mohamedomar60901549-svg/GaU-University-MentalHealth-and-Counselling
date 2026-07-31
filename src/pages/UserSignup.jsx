import { useState } from "react";

export default function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    if (!email || !password || !name) {
      alert("❌ Please fill all fields (Name, Email, Password)");
      return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      alert("❌ Please enter a valid email address");
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      console.log("Checking if user exists:", email);
      console.log("Connecting to JSON Server on port 3000...");
      
      // Check if user already exists
      const checkResponse = await fetch("http://localhost:3000/users");
      
      if (!checkResponse.ok) {
        throw new Error(`HTTP error! status: ${checkResponse.status}`);
      }
      
      const users = await checkResponse.json();
      const exists = users.find((u) => u.email === email);

      if (exists) {
        alert("❌ User already exists! Please login instead.");
        setLoading(false);
        return;
      }

      console.log("Creating new user...");
      
      // Create new user
      const createResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
          name: name,
          createdAt: new Date().toISOString()
        }),
      });

      if (!createResponse.ok) {
        throw new Error(`Failed to create user: ${createResponse.status}`);
      }

      const newUser = await createResponse.json();
      console.log("User created successfully:", newUser);
      
      alert("✅ Signup successful! Please login to continue.");
      window.location.href = "/login";
      
    } catch (error) {
      console.error("Signup error:", error);
      alert("❌ Failed to connect to JSON Server. Please make sure it's running on http://localhost:3000\n\nTo start JSON Server, run:\njson-server --watch db.json --port 3000");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      signup();
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
      {/* Animated Background Elements */}
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
            Create Account
          </h2>
          <p style={{
            color: "#6B6B80",
            fontSize: "14px",
            margin: 0
          }}>
            Join our community and start your wellness journey
          </p>
        </div>

        {/* Form */}
        <div>
          {/* Server Status Check Button */}
          <div style={{ marginBottom: "15px" }}>
            <button
              type="button"
              onClick={async () => {
                try {
                  const response = await fetch("http://localhost:3000/users");
                  if (response.ok) {
                    alert("✅ JSON Server is running on port 3000!");
                  } else {
                    alert("❌ JSON Server responded but with error");
                  }
                } catch (e) {
                  alert("❌ JSON Server is NOT running on port 3000\n\nStart it with:\njson-server --watch db.json --port 3000");
                }
              }}
              style={{
                width: "100%",
                background: "#FFF9F0",
                color: "#FF8C42",
                border: "1px solid rgba(255,140,66,0.3)",
                padding: "8px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "12px"
              }}
            >
              🔌 Check JSON Server Status
            </button>
          </div>

          {/* Full Name Input */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#4A4A5E",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              👤 Full Name <span style={{ color: "#FF8C42" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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

          {/* Email Input */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#4A4A5E",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              📧 Email Address <span style={{ color: "#FF8C42" }}>*</span>
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
              🔒 Password <span style={{ color: "#FF8C42" }}>*</span>
            </label>
            <input
              type={show ? "text" : "password"}
              placeholder="Create a password (min 6 characters)"
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
          <div style={{ marginBottom: "20px" }}>
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

          {/* Role Selection */}
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#4A4A5E",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              👤 I am a
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                background: "white",
                color: "#4A4A5E",
                fontSize: "14px",
                outline: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid #FF8C42";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid rgba(255, 140, 66, 0.3)";
              }}
            >
              <option value="student" style={{ background: "white", color: "#4A4A5E" }}>🎓 Student</option>
              <option value="counsellor" style={{ background: "white", color: "#4A4A5E" }}>💚 Counsellor</option>
            </select>
          </div>

          {/* Signup Button */}
          <button
            type="button"
            onClick={signup}
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
            {loading ? "⏳ Creating Account..." : "🚀 Create Account"}
          </button>

          {/* Login Link */}
          <div style={{
            textAlign: "center",
            paddingTop: "20px",
            borderTop: "1px solid rgba(0,0,0,0.08)"
          }}>
            <p style={{
              color: "#6B6B80",
              fontSize: "14px",
              margin: 0
            }}>
              Already have an account?{' '}
              <a
                href="/login"
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
                Login here
              </a>
            </p>
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