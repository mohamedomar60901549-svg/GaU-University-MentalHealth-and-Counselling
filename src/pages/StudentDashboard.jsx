import { useState, useEffect } from "react";
import AppointmentForm from "./AppointmentForm";
import Chat from "./Chat";

export default function StudentDashboard() {
  const [tab, setTab] = useState("new");
  const [appointments, setAppointments] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchAppointments = () => {
    fetch("http://127.0.0.1:3000/appointments")
      .then(res => res.json())
      .then(data => {
        const mine = data.filter(
          (a) => a.studentEmail === user.email
        );
        setAppointments(mine);
      });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const getStatusColor = (status) => {
    if (status === "accepted") return "#4CAF50";
    if (status === "pending") return "#FF8C42";
    if (status === "rejected") return "#ff6b6b";
    return "#8B8BA0";
  };

  const getStatusIcon = (status) => {
    if (status === "accepted") return "✓";
    if (status === "pending") return "⏳";
    if (status === "rejected") return "❌";
    return "📅";
  };

  return (
    <div style={{
      minHeight: "100vh",
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
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2
      }}>
        {/* Welcome Header - Bright */}
        <div style={{
          background: "white",
          borderRadius: "24px",
          padding: "30px",
          marginBottom: "30px",
          border: "1px solid rgba(255, 140, 66, 0.2)",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
        }}>
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
            Student Dashboard
          </h2>
          <p style={{
            color: "#6B6B80",
            fontSize: "16px",
            margin: 0
          }}>
            Welcome back, {user?.name || "Student"}! Manage your appointments and connect with counsellors.
          </p>
        </div>

        {/* TABS - Bright */}
        <div style={{
          display: "flex",
          gap: "15px",
          marginBottom: "30px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <button 
            onClick={() => setTab("new")} 
            style={{
              padding: "12px 30px",
              border: "none",
              borderRadius: "50px",
              background: tab === "new" ? "linear-gradient(135deg, #FF8C42, #FFB347)" : "white",
              color: tab === "new" ? "white" : "#6B6B80",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: tab === "new" ? "none" : "1px solid rgba(255, 140, 66, 0.3)",
              boxShadow: tab === "new" ? "0 4px 12px rgba(255,140,66,0.3)" : "none"
            }}
            onMouseEnter={(e) => {
              if (tab !== "new") {
                e.target.style.background = "#FFF9F0";
                e.target.style.color = "#FF8C42";
                e.target.style.border = "1px solid #FF8C42";
              }
            }}
            onMouseLeave={(e) => {
              if (tab !== "new") {
                e.target.style.background = "white";
                e.target.style.color = "#6B6B80";
                e.target.style.border = "1px solid rgba(255, 140, 66, 0.3)";
              }
            }}
          >
            ➕ New Appointment
          </button>

          <button 
            onClick={() => setTab("my")} 
            style={{
              padding: "12px 30px",
              border: "none",
              borderRadius: "50px",
              background: tab === "my" ? "linear-gradient(135deg, #FF8C42, #FFB347)" : "white",
              color: tab === "my" ? "white" : "#6B6B80",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: tab === "my" ? "none" : "1px solid rgba(255, 140, 66, 0.3)",
              boxShadow: tab === "my" ? "0 4px 12px rgba(255,140,66,0.3)" : "none"
            }}
            onMouseEnter={(e) => {
              if (tab !== "my") {
                e.target.style.background = "#FFF9F0";
                e.target.style.color = "#FF8C42";
                e.target.style.border = "1px solid #FF8C42";
              }
            }}
            onMouseLeave={(e) => {
              if (tab !== "my") {
                e.target.style.background = "white";
                e.target.style.color = "#6B6B80";
                e.target.style.border = "1px solid rgba(255, 140, 66, 0.3)";
              }
            }}
          >
            📋 My Appointments
          </button>

          <button 
            onClick={() => setTab("chat")} 
            style={{
              padding: "12px 30px",
              border: "none",
              borderRadius: "50px",
              background: tab === "chat" ? "linear-gradient(135deg, #4CAF50, #45a049)" : "white",
              color: tab === "chat" ? "white" : "#6B6B80",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: tab === "chat" ? "none" : "1px solid rgba(76, 175, 80, 0.3)",
              boxShadow: tab === "chat" ? "0 4px 12px rgba(76,175,80,0.3)" : "none"
            }}
            onMouseEnter={(e) => {
              if (tab !== "chat") {
                e.target.style.background = "#F0FFF0";
                e.target.style.color = "#4CAF50";
                e.target.style.border = "1px solid #4CAF50";
              }
            }}
            onMouseLeave={(e) => {
              if (tab !== "chat") {
                e.target.style.background = "white";
                e.target.style.color = "#6B6B80";
                e.target.style.border = "1px solid rgba(76, 175, 80, 0.3)";
              }
            }}
          >
            💬 Chat
          </button>
        </div>

        {/* CONTENT */}
        {tab === "new" && <AppointmentForm />}

        {tab === "my" && (
          <div style={{
            background: "white",
            borderRadius: "24px",
            padding: "30px",
            border: "1px solid rgba(255, 140, 66, 0.2)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "15px",
              marginBottom: "25px",
              borderBottom: "2px solid rgba(255, 140, 66, 0.3)",
              paddingBottom: "15px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ fontSize: "28px" }}>📋</span>
                <h3 style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#FF8C42"
                }}>
                  My Appointments
                </h3>
              </div>
              <div style={{
                background: "rgba(255,140,66,0.1)",
                padding: "4px 12px",
                borderRadius: "20px",
                color: "#FF8C42",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                {appointments.length} Total
              </div>
            </div>

            {appointments.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "60px",
                color: "#6B6B80"
              }}>
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>📭</div>
                <p style={{ fontSize: "16px", margin: 0 }}>No appointments yet</p>
                <p style={{ fontSize: "14px", marginTop: "8px" }}>Click "New Appointment" to book your first session</p>
                <button 
                  onClick={() => setTab("new")}
                  style={{
                    marginTop: "20px",
                    background: "linear-gradient(135deg, #FF8C42, #FFB347)",
                    color: "white",
                    border: "none",
                    padding: "10px 25px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 5px 15px rgba(255,140,66,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  + Book Appointment
                </button>
              </div>
            ) : (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "20px"
              }}>
                {appointments.map((a) => (
                  <div key={a.id} style={{
                    background: "#FFF9F0",
                    borderRadius: "20px",
                    padding: "20px",
                    border: "1px solid rgba(255, 140, 66, 0.2)",
                    transition: "all 0.3s ease",
                    position: "relative"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
                    e.currentTarget.style.border = "1px solid #FF8C42";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.border = "1px solid rgba(255, 140, 66, 0.2)";
                  }}>
                    {/* Status Badge */}
                    <div style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: a.status === "accepted" ? "rgba(76,175,80,0.1)" : 
                                  a.status === "pending" ? "rgba(255,140,66,0.1)" : 
                                  "rgba(255,107,107,0.1)",
                      color: getStatusColor(a.status),
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    }}>
                      <span>{getStatusIcon(a.status)}</span>
                      <span>{a.status === "accepted" ? "Accepted" : 
                             a.status === "pending" ? "Pending" : 
                             "Rejected"}</span>
                    </div>

                    {/* Appointment Icon */}
                    <div style={{
                      fontSize: "40px",
                      marginBottom: "15px"
                    }}>📅</div>

                    {/* Problem Description */}
                    <div style={{
                      background: "rgba(255,140,66,0.05)",
                      padding: "12px",
                      borderRadius: "12px",
                      marginBottom: "15px"
                    }}>
                      <p style={{
                        margin: 0,
                        color: "#4A4A5E",
                        fontSize: "14px",
                        lineHeight: "1.5"
                      }}>
                        <strong style={{ color: "#FF8C42" }}>Concern:</strong> {a.problem || "Not specified"}
                      </p>
                    </div>

                    {/* Date and Time */}
                    <div style={{
                      marginTop: "10px",
                      paddingTop: "10px",
                      borderTop: "1px solid rgba(0,0,0,0.08)"
                    }}>
                      <p style={{
                        margin: "5px 0",
                        color: "#6B6B80",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}>
                        <span>📅</span> <strong>Date:</strong> {a.date || "To be scheduled"}
                      </p>
                      <p style={{
                        margin: "5px 0",
                        color: "#6B6B80",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}>
                        <span>⏰</span> <strong>Time:</strong> {a.time || "To be confirmed"}
                      </p>
                    </div>

                    {/* Action for Accepted Appointments */}
                    {a.status === "accepted" && (
                      <button
                        onClick={() => setTab("chat")}
                        style={{
                          width: "100%",
                          marginTop: "15px",
                          background: "linear-gradient(135deg, #4CAF50, #45a049)",
                          color: "white",
                          border: "none",
                          padding: "10px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: "600",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "scale(1.02)";
                          e.target.style.boxShadow = "0 2px 10px rgba(76,175,80,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        💬 Start Chat
                      </button>
                    )}

                    {/* Waiting Message for Pending */}
                    {a.status === "pending" && (
                      <div style={{
                        marginTop: "15px",
                        textAlign: "center",
                        padding: "8px",
                        background: "rgba(255,140,66,0.05)",
                        borderRadius: "10px"
                      }}>
                        <p style={{
                          margin: 0,
                          color: "#FF8C42",
                          fontSize: "12px"
                        }}>
                          ⏳ Waiting for counsellor response
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "chat" && <Chat />}

        {/* Quick Tip - Bright */}
        <div style={{
          marginTop: "30px",
          background: "white",
          borderRadius: "20px",
          padding: "20px",
          border: "1px solid rgba(255,140,66,0.2)",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "10px"
          }}>
            <span style={{ fontSize: "24px" }}>💡</span>
            <h4 style={{
              margin: 0,
              color: "#FF8C42",
              fontSize: "18px"
            }}>
              Need Help?
            </h4>
          </div>
          <p style={{
            color: "#6B6B80",
            fontSize: "14px",
            margin: 0
          }}>
            Your mental health matters. If you need immediate assistance, contact our 24/7 helpline: <strong style={{ color: "#FF8C42" }}>+1 (234) 567-890</strong>
          </p>
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