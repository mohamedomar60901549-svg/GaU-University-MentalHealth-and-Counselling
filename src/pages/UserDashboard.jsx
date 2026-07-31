import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [error, setError] = useState("");

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      console.log("Fetching appointments for:", user?.email);
      
      const response = await fetch("http://127.0.0.1:5000/appointments");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("All appointments:", data);
      
      const myAppointments = data.filter(
        (a) => a.studentEmail === user?.email
      );
      
      console.log("My appointments:", myAppointments);
      setAppointments(myAppointments);
      setError("");
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setError("Failed to load appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchAppointments();
    }
  }, []);

  const cancelAppointment = async (appointmentId, counsellorName, date, time) => {
    if (!window.confirm(`Are you sure you want to cancel your appointment with ${counsellorName} on ${date} at ${time}?`)) {
      return;
    }
    
    try {
      console.log("Cancelling appointment:", appointmentId);
      
      const response = await fetch(`http://127.0.0.1:5000/appointments/${appointmentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        setAppointments(appointments.filter(a => a.id !== appointmentId));
        alert('✅ Appointment cancelled successfully');
      } else {
        const errorData = await response.json();
        console.error("Delete error:", errorData);
        alert(`❌ Failed to cancel appointment: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      alert('❌ Error cancelling appointment. Please check your connection.');
    }
  };

  const handleReschedule = (appointment) => {
    setEditingAppointment(appointment);
    setNewDate(appointment.date);
    setNewTime(appointment.time);
    setShowRescheduleModal(true);
  };

  const confirmReschedule = async () => {
    if (!newDate || !newTime) {
      alert('Please select both date and time');
      return;
    }

    try {
      console.log("Rescheduling appointment:", editingAppointment.id);
      console.log("New date/time:", newDate, newTime);
      
      const response = await fetch(`http://127.0.0.1:3000/appointments/${editingAppointment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: newDate,
          time: newTime,
          status: 'pending',
          counsellor: editingAppointment.counsellor,
          studentEmail: editingAppointment.studentEmail,
          studentName: editingAppointment.studentName,
          message: editingAppointment.message || ""
        })
      });
      
      if (response.ok) {
        const updatedAppointment = await response.json();
        console.log("Updated appointment:", updatedAppointment);
        
        setAppointments(appointments.map(a => 
          a.id === editingAppointment.id ? updatedAppointment : a
        ));
        
        setShowRescheduleModal(false);
        setEditingAppointment(null);
        alert('✅ Appointment rescheduled successfully! Waiting for counsellor approval.');
      } else {
        const errorData = await response.json();
        console.error("Update error:", errorData);
        alert(`❌ Failed to reschedule appointment: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error rescheduling appointment:', error);
      alert('❌ Error rescheduling appointment. Please check your connection.');
    }
  };

  const bookNewAppointment = () => {
    navigate("/appointment");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (e) {
      return dateString;
    }
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
            Welcome back, {user?.name || "Student"}!
          </h2>
          <p style={{
            color: "#6B6B80",
            fontSize: "16px",
            margin: 0
          }}>
            Your wellness journey continues here. Book, reschedule, or cancel appointments.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}>
          <button 
            onClick={bookNewAppointment} 
            style={{
              background: "linear-gradient(135deg, #FF8C42, #FFB347)",
              color: "white",
              border: "none",
              padding: "14px 30px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 5px 20px rgba(255,140,66,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            📅 Book Appointment
          </button>

          <button 
            onClick={() => navigate("/chat")} 
            style={{
              background: "linear-gradient(135deg, #4CAF50, #45a049)",
              color: "white",
              border: "none",
              padding: "14px 30px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 5px 20px rgba(76,175,80,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            💬 Go to Chat
          </button>
        </div>

        {/* MY APPOINTMENTS SECTION - Bright */}
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
            gap: "10px",
            marginBottom: "25px",
            borderBottom: "2px solid rgba(255, 140, 66, 0.3)",
            paddingBottom: "15px",
            flexWrap: "wrap"
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
            <span style={{
              marginLeft: "auto",
              background: "rgba(255,140,66,0.1)",
              padding: "4px 12px",
              borderRadius: "20px",
              color: "#FF8C42",
              fontSize: "14px",
              fontWeight: "600"
            }}>
              {appointments.length} Total
            </span>
          </div>

          {error && (
            <div style={{
              background: "rgba(255,107,107,0.1)",
              border: "1px solid #ff6b6b",
              borderRadius: "12px",
              padding: "12px",
              marginBottom: "20px",
              color: "#ff6b6b",
              textAlign: "center"
            }}>
              {error}
              <button 
                onClick={fetchAppointments}
                style={{
                  marginLeft: "10px",
                  background: "none",
                  border: "none",
                  color: "#ff6b6b",
                  textDecoration: "underline",
                  cursor: "pointer"
                }}
              >
                Retry
              </button>
            </div>
          )}

          {loading ? (
            <div style={{
              textAlign: "center",
              padding: "40px",
              color: "#6B6B80"
            }}>
              <div style={{ fontSize: "32px", marginBottom: "15px" }}>⏳</div>
              <p>Loading your appointments...</p>
            </div>
          ) : appointments.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "40px",
              color: "#6B6B80"
            }}>
              <div style={{ fontSize: "48px", marginBottom: "15px" }}>📅</div>
              <p style={{ fontSize: "16px", margin: 0 }}>No appointments yet</p>
              <p style={{ fontSize: "14px", marginTop: "8px" }}>Book your first counselling session today!</p>
              <button 
                onClick={bookNewAppointment}
                style={{
                  marginTop: "20px",
                  background: "rgba(255,140,66,0.1)",
                  color: "#FF8C42",
                  border: "1px solid #FF8C42",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,140,66,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255,140,66,0.1)";
                }}
              >
                + Book Now
              </button>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "20px"
            }}>
              {appointments.map((a, index) => (
                <div key={a.id || index} style={{
                  background: "#FFF9F0",
                  borderRadius: "20px",
                  padding: "20px",
                  border: "1px solid rgba(255, 140, 66, 0.2)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
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
                    color: a.status === "accepted" ? "#4CAF50" : 
                           a.status === "pending" ? "#FF8C42" : 
                           "#ff6b6b",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}>
                    {a.status === "accepted" ? "✓ Accepted" : 
                     a.status === "pending" ? "⏳ Pending" : 
                     "❌ Rejected"}
                  </div>
                  
                  <div style={{ marginBottom: "15px" }}>
                    <div style={{
                      fontSize: "40px",
                      marginBottom: "10px"
                    }}>👨‍⚕️</div>
                    <p style={{
                      margin: "5px 0",
                      color: "#4A4A5E",
                      fontSize: "16px",
                      fontWeight: "500"
                    }}>
                      <strong style={{ color: "#FF8C42" }}>Counsellor:</strong> {a.counsellor}
                    </p>
                  </div>
                  
                  <div style={{
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                    paddingTop: "15px",
                    marginTop: "10px"
                  }}>
                    <p style={{
                      margin: "8px 0",
                      color: "#6B6B80",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}>
                      <span>📅</span> <strong>Date:</strong> {formatDate(a.date)}
                    </p>
                    <p style={{
                      margin: "8px 0",
                      color: "#6B6B80",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}>
                      <span>⏰</span> <strong>Time:</strong> {a.time}
                    </p>
                    {a.message && (
                      <p style={{
                        margin: "8px 0",
                        color: "#6B6B80",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "13px"
                      }}>
                        <span>💬</span> <strong>Message:</strong> {a.message}
                      </p>
                    )}
                  </div>

                  {/* CRUD Buttons */}
                  <div style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px",
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                    paddingTop: "15px"
                  }}>
                    {a.status !== "rejected" && (
                      <button
                        onClick={() => handleReschedule(a)}
                        style={{
                          flex: 1,
                          background: "rgba(255,140,66,0.1)",
                          color: "#FF8C42",
                          border: "1px solid #FF8C42",
                          padding: "8px 12px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: "500",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(255,140,66,0.2)";
                          e.target.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "rgba(255,140,66,0.1)";
                          e.target.style.transform = "translateY(0)";
                        }}
                      >
                        🔄 Reschedule
                      </button>
                    )}
                    
                    <button
                      onClick={() => cancelAppointment(a.id, a.counsellor, formatDate(a.date), a.time)}
                      style={{
                        flex: 1,
                        background: "rgba(255,107,107,0.1)",
                        color: "#ff6b6b",
                        border: "1px solid #ff6b6b",
                        padding: "8px 12px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "500",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(255,107,107,0.2)";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(255,107,107,0.1)";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      🗑️ {a.status === "rejected" ? "Remove" : "Cancel"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Tips Section - Bright */}
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
              Quick Tips
            </h4>
          </div>
          <p style={{
            color: "#6B6B80",
            fontSize: "14px",
            margin: "5px 0"
          }}>
            • Your mental health matters. Don't hesitate to reach out to our counsellors.
          </p>
          <p style={{
            color: "#6B6B80",
            fontSize: "14px",
            margin: "5px 0"
          }}>
            • Rescheduling sends a new request to your counsellor for approval.
          </p>
          <p style={{
            color: "#6B6B80",
            fontSize: "14px",
            margin: "5px 0"
          }}>
            • Cancelled appointments can be rebooked anytime.
          </p>
        </div>
      </div>

      {/* Reschedule Modal - Bright */}
      {showRescheduleModal && editingAppointment && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(5px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
          padding: "20px"
        }} onClick={() => {
          setShowRescheduleModal(false);
          setEditingAppointment(null);
        }}>
          <div style={{
            background: "white",
            borderRadius: "24px",
            padding: "30px",
            maxWidth: "500px",
            width: "100%",
            border: "1px solid #FF8C42",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)"
          }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{
              margin: "0 0 10px 0",
              color: "#FF8C42",
              fontSize: "24px"
            }}>
              Reschedule Appointment
            </h3>
            <p style={{
              color: "#6B6B80",
              marginBottom: "20px"
            }}>
              With: <strong style={{ color: "#FF8C42" }}>{editingAppointment.counsellor}</strong>
            </p>
            
            <div style={{ marginBottom: "15px" }}>
              <label style={{
                display: "block",
                color: "#4A4A5E",
                marginBottom: "8px",
                fontWeight: "500"
              }}>
                Select New Date
              </label>
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,140,66,0.3)",
                  background: "white",
                  color: "#4A4A5E",
                  fontSize: "16px"
                }}
              />
            </div>
            
            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                color: "#4A4A5E",
                marginBottom: "8px",
                fontWeight: "500"
              }}>
                Select New Time
              </label>
              <select
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,140,66,0.3)",
                  background: "white",
                  color: "#4A4A5E",
                  fontSize: "16px"
                }}
              >
                <option value="">Select a time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </div>
            
            <div style={{
              display: "flex",
              gap: "15px",
              justifyContent: "flex-end"
            }}>
              <button
                onClick={() => {
                  setShowRescheduleModal(false);
                  setEditingAppointment(null);
                }}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "1px solid rgba(0,0,0,0.2)",
                  background: "transparent",
                  color: "#6B6B80",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmReschedule}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  background: "linear-gradient(135deg, #FF8C42, #FFB347)",
                  color: "white",
                  cursor: "pointer",
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
                Confirm Reschedule
              </button>
            </div>
          </div>
        </div>
      )}

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

export default UserDashboard;