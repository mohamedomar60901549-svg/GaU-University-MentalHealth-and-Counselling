import React, { useEffect, useState } from "react";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [counsellors, setCounsellors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingAppointment, setDeletingAppointment] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  
  console.log("=== MyAppointments Debug ===");
  console.log("Current user:", user);
  console.log("User ID:", user?.id);
  console.log("User Email:", user?.email);
  console.log("User Name:", user?.name);

  useEffect(() => {
    fetchAllData();
  }, [refresh]);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      await fetchAppointments();
      await fetchCounsellors();
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAppointments = async () => {
    try {
      console.log("Fetching all appointments from server...");
      const response = await fetch("http://127.0.0.1:5000/appointments");
      if (!response.ok) throw new Error("Failed to fetch appointments");
      const allAppointments = await response.json();
      
      console.log("All appointments from server:", allAppointments);
      console.log("Total appointments:", allAppointments.length);
      
      let myAppointments = [];
      
      if (user?.id) {
        myAppointments = allAppointments.filter(
          (a) => a.studentId == user.id || a.studentId === user.id
        );
        console.log("Filtered by studentId:", myAppointments.length, "appointments");
      }
      
      if (myAppointments.length === 0 && user?.email) {
        myAppointments = allAppointments.filter(
          (a) => a.studentEmail === user.email
        );
        console.log("Filtered by studentEmail:", myAppointments.length, "appointments");
      }
      
      if (myAppointments.length === 0 && user?.name) {
        myAppointments = allAppointments.filter(
          (a) => a.studentName === user.name
        );
        console.log("Filtered by studentName:", myAppointments.length, "appointments");
      }
      
      setAppointments(myAppointments);
      console.log("Final appointments to display:", myAppointments);
      
    } catch (error) {
      console.error("Error fetching appointments:", error);
      throw error;
    }
  };

  const fetchCounsellors = async () => {
    try {
      console.log("Fetching counsellors...");
      const response = await fetch("http://127.0.0.1:5000/users");
      if (!response.ok) throw new Error("Failed to fetch counsellors");
      const allUsers = await response.json();
      console.log("All users:", allUsers);
      
      const onlyCounsellors = allUsers.filter(
        (u) => u.role === "counsellor"
      );
      console.log("Counsellors found:", onlyCounsellors.length);
      setCounsellors(onlyCounsellors);
    } catch (error) {
      console.error("Error fetching counsellors:", error);
      throw error;
    }
  };

  const handleReschedule = (appointment) => {
    console.log("Rescheduling appointment:", appointment);
    setEditingAppointment(appointment);
    setNewDate(appointment.date || "");
    setNewTime(appointment.time || "");
    setShowRescheduleModal(true);
  };

  const confirmReschedule = async () => {
    if (!newDate || !newTime) {
      alert("❌ Please select both date and time");
      return;
    }

    const selectedDate = new Date(newDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      alert("❌ Please select a future date");
      return;
    }

    try {
      console.log("Sending PUT request for appointment:", editingAppointment.id);
      console.log("New data:", { date: newDate, time: newTime });
      
      const response = await fetch(`http://127.0.0.1:5000/appointments/${editingAppointment.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...editingAppointment,
          date: newDate,
          time: newTime,
          status: "pending",
        }),
      });

      if (response.ok) {
        const updatedAppointment = await response.json();
        console.log("Update successful:", updatedAppointment);
        
        setAppointments(appointments.map(a => 
          a.id === editingAppointment.id ? updatedAppointment : a
        ));
        
        setShowRescheduleModal(false);
        setEditingAppointment(null);
        alert("✅ Appointment rescheduled successfully! Waiting for counsellor approval.");
        setRefresh(!refresh);
      } else {
        const errorData = await response.json();
        console.error("Update failed:", errorData);
        alert(`❌ Failed to reschedule: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error rescheduling:", error);
      alert("❌ Error rescheduling appointment. Please check your connection.");
    }
  };

  const handleDeleteClick = (appointment) => {
    console.log("Deleting appointment:", appointment);
    setDeletingAppointment(appointment);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      console.log("Sending DELETE request for appointment:", deletingAppointment.id);
      
      const response = await fetch(`http://127.0.0.1:5000/appointments/${deletingAppointment.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Delete successful");
        setAppointments(appointments.filter(a => a.id !== deletingAppointment.id));
        setShowDeleteConfirm(false);
        setDeletingAppointment(null);
        alert("✅ Appointment cancelled successfully");
        setRefresh(!refresh);
      } else {
        const errorData = await response.json();
        console.error("Delete failed:", errorData);
        alert(`❌ Failed to cancel appointment: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error deleting:", error);
      alert("❌ Error cancelling appointment");
    }
  };

  const bookNewAppointment = () => {
    window.location.href = "/appointment";
  };

  const getCounsellorName = (id) => {
    const c = counsellors.find((c) => c.id == id);
    return c ? c.name : `Counsellor ID: ${id}`;
  };

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

  const getStatusText = (status) => {
    if (status === "accepted") return "Accepted";
    if (status === "pending") return "Pending Approval";
    if (status === "rejected") return "Rejected";
    return "Unknown";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "To be scheduled";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      return dateString;
    }
  };

  const formatTime = (timeString) => {
    if (!timeString) return "To be confirmed";
    try {
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minutes} ${ampm}`;
    } catch (e) {
      return timeString;
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
        {/* Header Section - Bright */}
        <div style={{
          background: "white",
          borderRadius: "24px",
          padding: "30px",
          marginBottom: "30px",
          border: "1px solid rgba(133, 102, 35, 0.16)",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
        }}>
          <div style={{
            fontSize: "48px",
            marginBottom: "10px"
          }}>📅</div>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            margin: "0 0 10px 0",
            background: "linear-gradient(135deg, #FF8C42 0%, #4CAF50 60%, #FFB347 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            My Appointments
          </h2>
          <p style={{
            color: "#6B6B80",
            fontSize: "16px",
            margin: 0
          }}>
            Track, reschedule, or cancel your counselling sessions
          </p>
          
          {/* Debug Info Panel - Bright Version */}
          <div style={{
            marginTop: "15px",
            padding: "12px",
            background: "#FFF9F0",
            borderRadius: "12px",
            fontSize: "12px",
            textAlign: "left",
            border: "1px solid rgba(255,140,66,0.2)"
          }}>
            <div style={{ color: "#FF8C42", marginBottom: "5px", fontWeight: "600" }}>📊 Debug Info:</div>
            <div style={{ color: "#6B6B80" }}>User: {user?.name} (ID: {user?.id}, Email: {user?.email})</div>
            <div style={{ color: "#6B6B80" }}>Appointments Found: {appointments.length}</div>
            <div style={{ color: "#6B6B80" }}>Counsellors: {counsellors.length}</div>
            <button 
              onClick={() => {
                setRefresh(!refresh);
                fetchAppointments();
              }}
              style={{
                marginTop: "8px",
                background: "#FF8C42",
                border: "none",
                padding: "6px 12px",
                borderRadius: "8px",
                color: "white",
                cursor: "pointer",
                fontSize: "11px",
                fontWeight: "500"
              }}
              onMouseEnter={(e) => e.target.style.background = "#FFB347"}
              onMouseLeave={(e) => e.target.style.background = "#FF8C42"}
            >
              🔄 Refresh Data
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: "rgba(255,107,107,0.1)",
            border: "1px solid #ff6b6b",
            borderRadius: "12px",
            padding: "15px",
            marginBottom: "20px",
            textAlign: "center",
            color: "#ff6b6b"
          }}>
            {error}
            <button
              onClick={fetchAllData}
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

        {/* Loading State */}
        {loading ? (
          <div style={{
            background: "white",
            borderRadius: "24px",
            padding: "60px 40px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
          }}>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>⏳</div>
            <p style={{ color: "#6B6B80" }}>Loading your appointments...</p>
          </div>
        ) : appointments.length === 0 ? (
          <div style={{
            background: "white",
            borderRadius: "24px",
            padding: "60px 40px",
            border: "1px solid rgba(255,140,66,0.2)",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              fontSize: "64px",
              marginBottom: "20px",
              opacity: 0.6
            }}>📭</div>
            <h3 style={{
              color: "#FF8C42",
              fontSize: "24px",
              marginBottom: "10px"
            }}>
              No Appointments Yet
            </h3>
            <p style={{
              color: "#6B6B80",
              fontSize: "16px",
              marginBottom: "25px"
            }}>
              You haven't booked any counselling sessions yet.
            </p>
            <button onClick={bookNewAppointment} style={{
              background: "linear-gradient(135deg, #FF8C42, #FFB347)",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 5px 20px rgba(255,140,66,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}>
              📅 Book Your First Appointment
            </button>
          </div>
        ) : (
          <>
            {/* Stats Summary - Bright */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "30px"
            }}>
              <div style={{
                background: "white",
                borderRadius: "20px",
                padding: "20px",
                textAlign: "center",
                border: "1px solid rgba(255,140,66,0.2)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
              }}>
                <div style={{ fontSize: "32px", marginBottom: "5px" }}>📊</div>
                <div style={{ fontSize: "28px", fontWeight: "700", color: "#FF8C42" }}>{appointments.length}</div>
                <div style={{ color: "#6B6B80", fontSize: "12px" }}>Total Appointments</div>
              </div>
              <div style={{
                background: "white",
                borderRadius: "20px",
                padding: "20px",
                textAlign: "center",
                border: "1px solid rgba(76,175,80,0.2)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
              }}>
                <div style={{ fontSize: "32px", marginBottom: "5px" }}>✓</div>
                <div style={{ fontSize: "28px", fontWeight: "700", color: "#4CAF50" }}>
                  {appointments.filter(a => a.status === "accepted").length}
                </div>
                <div style={{ color: "#6B6B80", fontSize: "12px" }}>Accepted</div>
              </div>
              <div style={{
                background: "white",
                borderRadius: "20px",
                padding: "20px",
                textAlign: "center",
                border: "1px solid rgba(255,140,66,0.2)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
              }}>
                <div style={{ fontSize: "32px", marginBottom: "5px" }}>⏳</div>
                <div style={{ fontSize: "28px", fontWeight: "700", color: "#FF8C42" }}>
                  {appointments.filter(a => a.status === "pending").length}
                </div>
                <div style={{ color: "#6B6B80", fontSize: "12px" }}>Pending</div>
              </div>
            </div>

            {/* Appointments Grid - Bright Cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "20px"
            }}>
              {appointments.map((a, index) => (
                <div key={a.id || index} style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "20px",
                  border: "1px solid rgba(255,140,66,0.2)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.1)";
                  e.currentTarget.style.border = "1px solid #FF8C42";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                  e.currentTarget.style.border = "1px solid rgba(255,140,66,0.2)";
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
                    <span>{getStatusText(a.status)}</span>
                  </div>
                  
                  {/* Counsellor Info */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom: "20px",
                    paddingRight: "100px"
                  }}>
                    <div style={{
                      fontSize: "50px",
                      background: "linear-gradient(135deg, #FF8C42, #FFB347)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>👨‍⚕️</div>
                    <div>
                      <h4 style={{
                        margin: 0,
                        color: "#FF8C42",
                        fontSize: "18px"
                      }}>
                        {getCounsellorName(a.counsellorId)}
                      </h4>
                      <p style={{
                        margin: "5px 0 0 0",
                        fontSize: "12px",
                        color: "#8B8BA0"
                      }}>Professional Counsellor</p>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div style={{
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                    paddingTop: "15px",
                    marginTop: "10px"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px"
                    }}>
                      <span style={{ fontSize: "18px" }}>📅</span>
                      <span style={{ color: "#4A4A5E" }}>
                        <strong style={{ color: "#FF8C42" }}>Date:</strong> {formatDate(a.date)}
                      </span>
                    </div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px"
                    }}>
                      <span style={{ fontSize: "18px" }}>⏰</span>
                      <span style={{ color: "#4A4A5E" }}>
                        <strong style={{ color: "#FF8C42" }}>Time:</strong> {formatTime(a.time)}
                      </span>
                    </div>
                    {a.problem && (
                      <div style={{
                        background: "#FFF9F0",
                        padding: "10px",
                        borderRadius: "12px",
                        marginTop: "10px"
                      }}>
                        <p style={{
                          margin: 0,
                          color: "#6B6B80",
                          fontSize: "13px",
                          lineHeight: "1.5"
                        }}>
                          <strong style={{ color: "#FF8C42" }}>Concern:</strong> {a.problem}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CRUD Buttons */}
                  <div style={{
                    marginTop: "15px",
                    paddingTop: "15px",
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                    display: "flex",
                    gap: "10px"
                  }}>
                    {a.status !== "rejected" && (
                      <button
                        onClick={() => handleReschedule(a)}
                        style={{
                          flex: 1,
                          background: "rgba(255,140,66,0.1)",
                          color: "#FF8C42",
                          border: "1px solid #FF8C42",
                          padding: "8px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          fontSize: "13px",
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
                      onClick={() => handleDeleteClick(a)}
                      style={{
                        flex: 1,
                        background: "rgba(255,107,107,0.1)",
                        color: "#ff6b6b",
                        border: "1px solid #ff6b6b",
                        padding: "8px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "13px",
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

                  {/* Accepted Appointment - Chat Button */}
                  {a.status === "accepted" && (
                    <div style={{
                      marginTop: "10px"
                    }}>
                      <button
                        onClick={() => window.location.href = "/chat"}
                        style={{
                          width: "100%",
                          background: "linear-gradient(135deg, #FF8C42, #FFB347)",
                          color: "white",
                          border: "none",
                          padding: "8px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: "600",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "scale(1.02)";
                          e.target.style.boxShadow = "0 2px 10px rgba(255,140,66,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        💬 Start Chat
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Quick Tip */}
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
              Need Immediate Help?
            </h4>
          </div>
          <p style={{
            color: "#6B6B80",
            fontSize: "14px",
            margin: 0
          }}>
            If you're experiencing a crisis, please contact our 24/7 helpline: <strong style={{ color: "#FF8C42" }}>+1 (234) 567-890</strong> or visit the emergency support section.
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
              With: <strong style={{ color: "#FF8C42" }}>{getCounsellorName(editingAppointment.counsellorId)}</strong>
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
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
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

      {/* Delete Confirmation Modal - Bright */}
      {showDeleteConfirm && deletingAppointment && (
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
          setShowDeleteConfirm(false);
          setDeletingAppointment(null);
        }}>
          <div style={{
            background: "white",
            borderRadius: "24px",
            padding: "30px",
            maxWidth: "400px",
            width: "100%",
            border: "1px solid #ff6b6b",
            textAlign: "center"
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: "48px", marginBottom: "15px" }}>⚠️</div>
            <h3 style={{
              margin: "0 0 10px 0",
              color: "#ff6b6b",
              fontSize: "22px"
            }}>
              Cancel Appointment
            </h3>
            <p style={{
              color: "#6B6B80",
              marginBottom: "20px"
            }}>
              Are you sure you want to cancel your appointment with<br />
              <strong style={{ color: "#FF8C42" }}>
                {getCounsellorName(deletingAppointment.counsellorId)}
              </strong><br />
              on <strong>{formatDate(deletingAppointment.date)}</strong> at <strong>{formatTime(deletingAppointment.time)}</strong>?
            </p>
            <p style={{
              color: "#ff6b6b",
              fontSize: "12px",
              marginBottom: "25px"
            }}>
              This action cannot be undone.
            </p>
            
            <div style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center"
            }}>
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeletingAppointment(null);
                }}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "1px solid rgba(0,0,0,0.2)",
                  background: "transparent",
                  color: "#6B6B80",
                  cursor: "pointer"
                }}
              >
                Keep Appointment
              </button>
              <button
                onClick={confirmDelete}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  background: "linear-gradient(135deg, #ff6b6b, #ff4757)",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Yes, Cancel Appointment
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

export default MyAppointments;