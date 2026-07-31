import { useState, useEffect } from "react";
import Chat from "./Chat";

export default function CounsellorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState("all");
  const [tab, setTab] = useState("appointments");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editProblem, setEditProblem] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingAppointment, setDeletingAppointment] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  // READ - Fetch appointments
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      console.log("Fetching appointments for counsellor:", user?.email);
      
      const response = await fetch("http://127.0.0.1:3000/appointments");
      if (!response.ok) throw new Error("Failed to fetch appointments");
      const data = await response.json();
      
      console.log("All appointments:", data);
      
      // Filter by counsellor email or counsellor ID
      const mine = data.filter(
        (a) => a.counsellorEmail === user?.email || a.counsellorId == user?.id
      );
      
      console.log("My appointments:", mine);
      setAppointments(mine);
      setError("");
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setError("Failed to load appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [refresh]);

  // UPDATE - Accept appointment
  const acceptAppointment = async (id, status) => {
    try {
      console.log("Accepting appointment:", id);
      const response = await fetch(`http://127.0.0.1:3000/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "accepted" }),
      });
      
      if (response.ok) {
        alert("✅ Appointment accepted successfully!");
        setRefresh(!refresh);
      } else {
        alert("❌ Failed to accept appointment");
      }
    } catch (error) {
      console.error("Error accepting appointment:", error);
      alert("❌ Error accepting appointment");
    }
  };

  // UPDATE - Reject appointment
  const rejectAppointment = async (id, status) => {
    try {
      console.log("Rejecting appointment:", id);
      const response = await fetch(`http://127.0.0.1:3000/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "rejected" }),
      });
      
      if (response.ok) {
        alert("❌ Appointment rejected");
        setRefresh(!refresh);
      } else {
        alert("❌ Failed to reject appointment");
      }
    } catch (error) {
      console.error("Error rejecting appointment:", error);
      alert("❌ Error rejecting appointment");
    }
  };

  // UPDATE - Edit appointment details (Full Update)
  const handleEditClick = (appointment) => {
    setEditingAppointment(appointment);
    setEditDate(appointment.date || "");
    setEditTime(appointment.time || "");
    setEditProblem(appointment.problem || appointment.description || "");
    setShowEditModal(true);
  };

  const confirmEdit = async () => {
    if (!editDate || !editTime) {
      alert("Please select both date and time");
      return;
    }

    try {
      console.log("Updating appointment:", editingAppointment.id);
      const response = await fetch(`http://127.0.0.1:3000/appointments/${editingAppointment.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...editingAppointment,
          date: editDate,
          time: editTime,
          problem: editProblem,
          description: editProblem,
        }),
      });
      
      if (response.ok) {
        alert("✅ Appointment updated successfully!");
        setShowEditModal(false);
        setEditingAppointment(null);
        setRefresh(!refresh);
      } else {
        alert("❌ Failed to update appointment");
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
      alert("❌ Error updating appointment");
    }
  };

  // DELETE - Remove appointment
  const handleDeleteClick = (appointment) => {
    setDeletingAppointment(appointment);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      console.log("Deleting appointment:", deletingAppointment.id);
      const response = await fetch(`http://127.0.0.1:3000/appointments/${deletingAppointment.id}`, {
        method: "DELETE",
      });
      
      if (response.ok) {
        alert("✅ Appointment deleted successfully!");
        setShowDeleteConfirm(false);
        setDeletingAppointment(null);
        setRefresh(!refresh);
      } else {
        alert("❌ Failed to delete appointment");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      alert("❌ Error deleting appointment");
    }
  };

  const selectStudent = (email) => {
    localStorage.setItem("activeStudent", email);
    setTab("chat");
  };

  const filtered =
    filter === "all"
      ? appointments
      : appointments.filter((a) => a.status === filter);

  const getStatusColor = (status) => {
    if (status === "accepted") return "#4CAF50";
    if (status === "pending") return "#FFD700";
    if (status === "rejected") return "#ff6b6b";
    return "#a0a0c0";
  };

  const getStatusIcon = (status) => {
    if (status === "accepted") return "✓";
    if (status === "pending") return "⏳";
    if (status === "rejected") return "❌";
    return "📅";
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

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0f1e 0%, #0f1424 100%)",
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
        background: "radial-gradient(circle, rgba(76,175,80,0.2) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "10%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 10s ease-in-out infinite reverse"
      }}></div>
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2
      }}>
        {/* Welcome Header */}
        <div style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
          border: "1px solid rgba(76, 175, 80, 0.2)",
          textAlign: "center"
        }}>
          <div style={{
            fontSize: "48px",
            marginBottom: "10px"
          }}>👩‍⚕️</div>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            margin: "0 0 10px 0",
            background: "linear-gradient(135deg, #FFFFFF, #4CAF50, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Counsellor Dashboard
          </h2>
          <p style={{
            color: "#a0a0c0",
            fontSize: "16px",
            margin: 0
          }}>
            Welcome back, {user?.name || "Counsellor"}! Manage appointments, update schedules, and support your students.
          </p>
          
          {/* Debug Info */}
          <div style={{
            marginTop: "15px",
            padding: "8px",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "8px",
            fontSize: "12px",
            color: "#4CAF50"
          }}>
            Logged in as: {user?.name} (ID: {user?.id}, Email: {user?.email}) | Total Appointments: {appointments.length}
          </div>
        </div>

        {/* TABS */}
        <div style={{
          display: "flex",
          gap: "15px",
          marginBottom: "30px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <button 
            onClick={() => setTab("appointments")} 
            style={{
              padding: "12px 30px",
              border: "none",
              borderRadius: "50px",
              background: tab === "appointments" ? "linear-gradient(135deg, #4CAF50, #2E7D32)" : "rgba(255, 255, 255, 0.05)",
              color: tab === "appointments" ? "white" : "#a0a0c0",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: tab === "appointments" ? "none" : "1px solid rgba(76, 175, 80, 0.3)"
            }}
            onMouseEnter={(e) => {
              if (tab !== "appointments") {
                e.target.style.background = "rgba(76,175,80,0.2)";
                e.target.style.color = "#4CAF50";
              }
            }}
            onMouseLeave={(e) => {
              if (tab !== "appointments") {
                e.target.style.background = "rgba(255, 255, 255, 0.05)";
                e.target.style.color = "#a0a0c0";
              }
            }}
          >
            📋 Appointments
          </button>

          <button 
            onClick={() => setTab("chat")} 
            style={{
              padding: "12px 30px",
              border: "none",
              borderRadius: "50px",
              background: tab === "chat" ? "linear-gradient(135deg, #FFD700, #FFA500)" : "rgba(255, 255, 255, 0.05)",
              color: tab === "chat" ? "#0a0f1e" : "#a0a0c0",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: tab === "chat" ? "none" : "1px solid rgba(76, 175, 80, 0.3)"
            }}
            onMouseEnter={(e) => {
              if (tab !== "chat") {
                e.target.style.background = "rgba(255,215,0,0.2)";
                e.target.style.color = "#FFD700";
              }
            }}
            onMouseLeave={(e) => {
              if (tab !== "chat") {
                e.target.style.background = "rgba(255, 255, 255, 0.05)";
                e.target.style.color = "#a0a0c0";
              }
            }}
          >
            💬 Chat
          </button>
        </div>

        {/* APPOINTMENTS SECTION */}
        {tab === "appointments" && (
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "30px",
            border: "1px solid rgba(76, 175, 80, 0.2)"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "15px",
              marginBottom: "25px",
              borderBottom: "2px solid rgba(76, 175, 80, 0.3)",
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
                  color: "#FFD700"
                }}>
                  Appointment Requests
                </h3>
              </div>
              <div style={{
                display: "flex",
                gap: "10px",
                alignItems: "center"
              }}>
                <div style={{
                  background: "rgba(76,175,80,0.2)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  color: "#4CAF50",
                  fontSize: "14px",
                  fontWeight: "600"
                }}>
                  {filtered.length} Total
                </div>
                <button
                  onClick={() => {
                    setRefresh(!refresh);
                    fetchAppointments();
                  }}
                  style={{
                    background: "rgba(76,175,80,0.2)",
                    border: "1px solid #4CAF50",
                    padding: "4px 12px",
                    borderRadius: "8px",
                    color: "#4CAF50",
                    cursor: "pointer",
                    fontSize: "12px"
                  }}
                >
                  🔄 Refresh
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div style={{
                background: "rgba(255,0,0,0.1)",
                border: "1px solid #ff6b6b",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                textAlign: "center",
                color: "#ff6b6b"
              }}>
                {error}
              </div>
            )}

            {/* FILTERS */}
            <div style={{
              display: "flex",
              gap: "10px",
              marginBottom: "25px",
              flexWrap: "wrap"
            }}>
              {["all", "pending", "accepted", "rejected"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "25px",
                    border: "none",
                    background: filter === f ? "linear-gradient(135deg, #4CAF50, #2E7D32)" : "rgba(255, 255, 255, 0.05)",
                    color: filter === f ? "white" : "#a0a0c0",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    border: filter === f ? "none" : "1px solid rgba(76, 175, 80, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    if (filter !== f) {
                      e.target.style.background = "rgba(76,175,80,0.2)";
                      e.target.style.color = "#4CAF50";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (filter !== f) {
                      e.target.style.background = "rgba(255, 255, 255, 0.05)";
                      e.target.style.color = "#a0a0c0";
                    }
                  }}
                >
                  {f === "all" ? "📊 All" : f === "pending" ? "⏳ Pending" : f === "accepted" ? "✓ Accepted" : "❌ Rejected"}
                </button>
              ))}
            </div>

            {/* Loading State */}
            {loading ? (
              <div style={{
                textAlign: "center",
                padding: "60px",
                color: "#a0a0c0"
              }}>
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>⏳</div>
                <p>Loading appointments...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "60px",
                color: "#a0a0c0"
              }}>
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>📭</div>
                <p style={{ fontSize: "16px", margin: 0 }}>No appointments assigned to you</p>
                <p style={{ fontSize: "14px", marginTop: "8px" }}>When students book appointments, they'll appear here</p>
              </div>
            ) : (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "20px"
              }}>
                {filtered.map((a) => (
                  <div key={a.id} style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "15px",
                    padding: "20px",
                    border: "1px solid rgba(76, 175, 80, 0.2)",
                    transition: "all 0.3s ease",
                    position: "relative"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.border = "1px solid rgba(76, 175, 80, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.border = "1px solid rgba(76, 175, 80, 0.2)";
                  }}>
                    {/* Status Badge */}
                    <div style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: `rgba(${getStatusColor(a.status) === "#4CAF50" ? "76,175,80" : 
                                  getStatusColor(a.status) === "#FFD700" ? "255,215,0" : 
                                  "255,107,107"}, 0.2)`,
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

                    {/* Student Header */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginBottom: "15px",
                      paddingRight: "100px"
                    }}>
                      <div style={{
                        fontSize: "50px",
                        background: "linear-gradient(135deg, #FFD700, #FFA500)",
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>👨‍🎓</div>
                      <div>
                        <h4 style={{
                          margin: 0,
                          color: "#FFD700",
                          fontSize: "18px"
                        }}>{a.fullName || a.studentName || "Student"}</h4>
                        <p style={{
                          margin: "5px 0 0 0",
                          fontSize: "11px",
                          color: "#a0a0c0"
                        }}>Email: {a.studentEmail}</p>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      marginBottom: "15px",
                      padding: "10px",
                      background: "rgba(76,175,80,0.05)",
                      borderRadius: "10px"
                    }}>
                      <p style={{ margin: 0, color: "#e0e0e0", fontSize: "13px" }}>
                        <strong style={{ color: "#4CAF50" }}>📅 Date:</strong><br />
                        {formatDate(a.date)}
                      </p>
                      <p style={{ margin: 0, color: "#e0e0e0", fontSize: "13px" }}>
                        <strong style={{ color: "#4CAF50" }}>⏰ Time:</strong><br />
                        {a.time || "To be confirmed"}
                      </p>
                      <p style={{ margin: 0, color: "#e0e0e0", fontSize: "13px" }}>
                        <strong style={{ color: "#4CAF50" }}>📧 Email:</strong><br />
                        {a.studentEmail}
                      </p>
                      <p style={{ margin: 0, color: "#e0e0e0", fontSize: "13px" }}>
                        <strong style={{ color: "#4CAF50" }}>🆔 ID:</strong><br />
                        {a.studentId || "N/A"}
                      </p>
                    </div>

                    {/* Description */}
                    <div style={{
                      background: "rgba(76,175,80,0.1)",
                      padding: "12px",
                      borderRadius: "10px",
                      marginBottom: "15px"
                    }}>
                      <p style={{
                        margin: 0,
                        color: "#e0e0e0",
                        fontSize: "13px",
                        lineHeight: "1.5"
                      }}>
                        <strong style={{ color: "#4CAF50" }}>💭 Concern:</strong><br />
                        {a.problem || a.description || "No description provided"}
                      </p>
                    </div>

                    {/* CRUD Action Buttons */}
                    <div style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "15px",
                      flexWrap: "wrap"
                    }}>
                      {/* Pending Appointments - Accept/Reject */}
                      {a.status === "pending" && (
                        <>
                          <button 
                            onClick={() => acceptAppointment(a.id, "accepted")}
                            style={{
                              flex: 1,
                              background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
                              color: "white",
                              border: "none",
                              padding: "10px",
                              borderRadius: "8px",
                              cursor: "pointer",
                              fontSize: "13px",
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
                            ✓ Accept
                          </button>
                          <button 
                            onClick={() => rejectAppointment(a.id, "rejected")}
                            style={{
                              flex: 1,
                              background: "rgba(255,0,0,0.2)",
                              color: "#ff6b6b",
                              border: "1px solid #ff6b6b",
                              padding: "10px",
                              borderRadius: "8px",
                              cursor: "pointer",
                              fontSize: "13px",
                              fontWeight: "600",
                              transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = "scale(1.02)";
                              e.target.style.background = "rgba(255,0,0,0.3)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = "scale(1)";
                              e.target.style.background = "rgba(255,0,0,0.2)";
                            }}
                          >
                            ✗ Reject
                          </button>
                        </>
                      )}

                      {/* UPDATE - Edit Button (for all appointments) */}
                      <button 
                        onClick={() => handleEditClick(a)}
                        style={{
                          flex: 1,
                          background: "rgba(255,215,0,0.2)",
                          color: "#FFD700",
                          border: "1px solid #FFD700",
                          padding: "10px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(255,215,0,0.3)";
                          e.target.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "rgba(255,215,0,0.2)";
                          e.target.style.transform = "translateY(0)";
                        }}
                      >
                        ✏️ Edit
                      </button>

                      {/* DELETE - Delete Button */}
                      <button 
                        onClick={() => handleDeleteClick(a)}
                        style={{
                          flex: 1,
                          background: "rgba(255,0,0,0.2)",
                          color: "#ff6b6b",
                          border: "1px solid #ff6b6b",
                          padding: "10px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(255,0,0,0.3)";
                          e.target.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "rgba(255,0,0,0.2)";
                          e.target.style.transform = "translateY(0)";
                        }}
                      >
                        🗑️ Delete
                      </button>
                    </div>

                    {/* Chat Button */}
                    <button 
                      onClick={() => selectStudent(a.studentEmail)}
                      style={{
                        width: "100%",
                        background: "linear-gradient(135deg, #FFD700, #FFA500)",
                        color: "#0a0f1e",
                        border: "none",
                        padding: "10px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "600",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.02)";
                        e.target.style.boxShadow = "0 2px 10px rgba(255,215,0,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      💬 Chat with Student
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CHAT SECTION */}
        {tab === "chat" && (
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "30px",
            border: "1px solid rgba(76, 175, 80, 0.2)"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
              borderBottom: "2px solid rgba(76, 175, 80, 0.3)",
              paddingBottom: "15px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ fontSize: "28px" }}>💬</span>
                <h3 style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#FFD700"
                }}>
                  Student Chat
                </h3>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("activeStudent");
                  setTab("appointments");
                }}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(76,175,80,0.3)",
                  padding: "5px 12px",
                  borderRadius: "8px",
                  color: "#a0a0c0",
                  cursor: "pointer",
                  fontSize: "12px"
                }}
              >
                ← Back to Appointments
              </button>
            </div>

            {!localStorage.getItem("activeStudent") ? (
              <div style={{
                textAlign: "center",
                padding: "60px",
                color: "#a0a0c0"
              }}>
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>💬</div>
                <p style={{ fontSize: "16px", margin: 0 }}>No student selected</p>
                <p style={{ fontSize: "14px", marginTop: "8px" }}>Please select a student from appointments to start chatting</p>
                <button 
                  onClick={() => setTab("appointments")}
                  style={{
                    marginTop: "20px",
                    background: "rgba(76,175,80,0.2)",
                    color: "#4CAF50",
                    border: "1px solid #4CAF50",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(76,175,80,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(76,175,80,0.2)";
                  }}
                >
                  📋 View Appointments
                </button>
              </div>
            ) : (
              <Chat />
            )}
          </div>
        )}
      </div>

      {/* Edit Appointment Modal */}
      {showEditModal && editingAppointment && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(5px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
          padding: "20px"
        }} onClick={() => {
          setShowEditModal(false);
          setEditingAppointment(null);
        }}>
          <div style={{
            background: "linear-gradient(135deg, #0f1424 0%, #1a1f2e 100%)",
            borderRadius: "20px",
            padding: "30px",
            maxWidth: "500px",
            width: "100%",
            border: "1px solid rgba(76,175,80,0.3)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
          }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{
              margin: "0 0 10px 0",
              color: "#FFD700",
              fontSize: "24px"
            }}>
              Edit Appointment
            </h3>
            <p style={{
              color: "#a0a0c0",
              marginBottom: "20px"
            }}>
              Student: <strong>{editingAppointment.fullName || editingAppointment.studentName}</strong>
            </p>
            
            <div style={{ marginBottom: "15px" }}>
              <label style={{
                display: "block",
                color: "#e0e0e0",
                marginBottom: "8px",
                fontWeight: "500"
              }}>
                Date
              </label>
              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(76,175,80,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  fontSize: "16px"
                }}
              />
            </div>
            
            <div style={{ marginBottom: "15px" }}>
              <label style={{
                display: "block",
                color: "#e0e0e0",
                marginBottom: "8px",
                fontWeight: "500"
              }}>
                Time
              </label>
              <select
                value={editTime}
                onChange={(e) => setEditTime(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(76,175,80,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
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
            
            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                color: "#e0e0e0",
                marginBottom: "8px",
                fontWeight: "500"
              }}>
                Concern / Description
              </label>
              <textarea
                value={editProblem}
                onChange={(e) => setEditProblem(e.target.value)}
                rows="3"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(76,175,80,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  fontSize: "14px",
                  fontFamily: "inherit"
                }}
              />
            </div>
            
            <div style={{
              display: "flex",
              gap: "15px",
              justifyContent: "flex-end"
            }}>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingAppointment(null);
                }}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  color: "#a0a0c0",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmEdit}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && deletingAppointment && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
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
            background: "linear-gradient(135deg, #0f1424 0%, #1a1f2e 100%)",
            borderRadius: "20px",
            padding: "30px",
            maxWidth: "400px",
            width: "100%",
            border: "1px solid rgba(255,107,107,0.3)",
            textAlign: "center"
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: "48px", marginBottom: "15px" }}>⚠️</div>
            <h3 style={{
              margin: "0 0 10px 0",
              color: "#ff6b6b",
              fontSize: "22px"
            }}>
              Delete Appointment
            </h3>
            <p style={{
              color: "#a0a0c0",
              marginBottom: "20px"
            }}>
              Are you sure you want to delete the appointment with<br />
              <strong style={{ color: "#FFD700" }}>
                {deletingAppointment.fullName || deletingAppointment.studentName}
              </strong><br />
              on <strong>{formatDate(deletingAppointment.date)}</strong> at <strong>{deletingAppointment.time}</strong>?
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
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  color: "#a0a0c0",
                  cursor: "pointer"
                }}
              >
                Keep Appointment
              </button>
              <button
                onClick={confirmDelete}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "linear-gradient(135deg, #ff6b6b, #ff4757)",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Yes, Delete
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
        `}
      </style>
    </div>
  );
}