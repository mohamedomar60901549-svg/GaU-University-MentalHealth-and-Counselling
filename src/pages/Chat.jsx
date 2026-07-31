import { useState, useEffect, useRef } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [users, setUsers] = useState([]);
  const messagesEndRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));

  // LOAD USERS BASED ON ROLE
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        if (user.role === "student") {
          setUsers(data.filter((u) => u.role === "counsellor"));
        } else {
          setUsers(data.filter((u) => u.role === "student"));
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // FETCH MESSAGES
  const fetchMessages = () => {
    if (!selectedUser) return;

    fetch("http://localhost:3000/messages")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (m) =>
            (m.sender === user.email && m.receiver === selectedUser) ||
            (m.sender === selectedUser && m.receiver === user.email)
        );
        setMessages(filtered);
      })
      .catch((error) => console.error("Error fetching messages:", error));
  };

  useEffect(() => {
    fetchMessages();
  }, [selectedUser]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // SEND MESSAGE
  const sendMessage = () => {
    if (!text.trim() || !selectedUser) return;

    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: user.email,
        receiver: selectedUser,
        text,
        time: new Date().toLocaleTimeString(),
      }),
    }).then(() => {
      setText("");
      fetchMessages();
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getSelectedUserName = () => {
    const selected = users.find(u => u.email === selectedUser);
    return selected ? selected.name || selected.email : selectedUser;
  };

  return (
    <div style={{
      width: "100%",
      background: "white",
      borderRadius: "24px",
      border: "1px solid rgba(255, 140, 66, 0.2)",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
    }}>
      {/* Chat Header */}
      <div style={{
        background: "linear-gradient(135deg, #FF8C42, #FFB347)",
        padding: "18px 24px",
        borderBottom: "none",
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
        <span style={{ fontSize: "32px" }}>💬</span>
        <div>
          <h3 style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "700",
            color: "white"
          }}>
            {selectedUser ? `Chat with ${getSelectedUserName()}` : "Chat"}
          </h3>
          {selectedUser && (
            <p style={{
              margin: "4px 0 0 0",
              fontSize: "11px",
              color: "rgba(255,255,255,0.9)"
            }}>
              {user.role === "student" ? "✨ Connected to counsellor" : "✨ Connected to student"}
            </p>
          )}
        </div>
      </div>

      {/* Select User Dropdown */}
      <div style={{
        padding: "20px 24px",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        background: "#FFF9F0"
      }}>
        <label style={{
          display: "block",
          marginBottom: "8px",
          color: "#4A4A5E",
          fontSize: "14px",
          fontWeight: "600"
        }}>
          {user.role === "student" ? "👨‍⚕️ Select Counsellor" : "👨‍🎓 Select Student"}
        </label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
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
            e.target.style.boxShadow = "0 0 8px rgba(255,140,66,0.3)";
          }}
          onBlur={(e) => {
            e.target.style.border = "1px solid rgba(255, 140, 66, 0.3)";
            e.target.style.boxShadow = "none";
          }}
        >
          <option value="" style={{ background: "white", color: "#6B6B80" }}>
            {user.role === "student" ? "Select a counsellor to start chatting" : "Select a student to start chatting"}
          </option>
          {users.map((u) => (
            <option key={u.id} value={u.email} style={{ background: "white", color: "#4A4A5E" }}>
              {u.name || u.email}
            </option>
          ))}
        </select>
      </div>

      {/* No User Selected */}
      {!selectedUser && (
        <div style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "white"
        }}>
          <div style={{
            fontSize: "64px",
            marginBottom: "20px",
            opacity: 0.5
          }}>💬</div>
          <p style={{
            color: "#6B6B80",
            fontSize: "18px",
            marginBottom: "10px",
            fontWeight: "500"
          }}>
            {user.role === "student" 
              ? "Select a counsellor to start chatting" 
              : "Select a student to start chatting"}
          </p>
          <p style={{
            color: "#8B8BA0",
            fontSize: "14px"
          }}>
            Choose a {user.role === "student" ? "counsellor" : "student"} from the dropdown above
          </p>
        </div>
      )}

      {/* Chat Messages Area */}
      {selectedUser && (
        <>
          <div style={{
            height: "400px",
            overflowY: "auto",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            background: "#FFF9F0"
          }}>
            {messages.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#8B8BA0"
              }}>
                <div style={{ fontSize: "56px", marginBottom: "15px" }}>💬</div>
                <p style={{ margin: 0, fontSize: "16px", fontWeight: "500" }}>No messages yet</p>
                <p style={{ fontSize: "13px", marginTop: "8px" }}>Start the conversation by sending a message</p>
              </div>
            ) : (
              messages.map((m, index) => {
                const isOwn = m.sender === user.email;
                
                return (
                  <div
                    key={m.id || index}
                    style={{
                      display: "flex",
                      justifyContent: isOwn ? "flex-end" : "flex-start",
                    }}
                  >
                    <div style={{
                      maxWidth: "70%",
                      background: isOwn ? "linear-gradient(135deg, #FF8C42, #FFB347)" : "white",
                      borderRadius: "20px",
                      padding: "10px 16px",
                      borderBottomRightRadius: isOwn ? "4px" : "20px",
                      borderBottomLeftRadius: isOwn ? "20px" : "4px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      border: isOwn ? "none" : "1px solid rgba(255, 140, 66, 0.2)"
                    }}>
                      {/* Sender Name */}
                      <div style={{
                        fontSize: "11px",
                        color: isOwn ? "rgba(255,255,255,0.8)" : "#FF8C42",
                        marginBottom: "4px",
                        fontWeight: "600"
                      }}>
                        {isOwn ? "You" : (m.sender.split('@')[0])}
                      </div>
                      
                      {/* Message Text */}
                      <div style={{
                        color: isOwn ? "white" : "#4A4A5E",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        wordWrap: "break-word"
                      }}>
                        {m.text}
                      </div>
                      
                      {/* Time Stamp */}
                      <div style={{
                        fontSize: "9px",
                        color: isOwn ? "rgba(255,255,255,0.6)" : "#8B8BA0",
                        marginTop: "5px",
                        textAlign: "right"
                      }}>
                        {m.time}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Area */}
          <div style={{
            padding: "20px 24px",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            background: "white"
          }}>
            <div style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-end"
            }}>
              <div style={{
                flex: 1,
                position: "relative"
              }}>
                <textarea
                  placeholder="Type your message... Press Enter to send"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  rows="1"
                  style={{
                    width: "100%",
                    padding: "12px 18px",
                    borderRadius: "25px",
                    border: "1px solid rgba(255, 140, 66, 0.3)",
                    background: "white",
                    color: "#4A4A5E",
                    fontSize: "14px",
                    outline: "none",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                    resize: "none",
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
              <button
                onClick={sendMessage}
                style={{
                  background: "linear-gradient(135deg, #FF8C42, #FFB347)",
                  color: "white",
                  border: "none",
                  padding: "12px 28px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 5px 20px rgba(255,140,66,0.4)";
                  e.target.style.background = "linear-gradient(135deg, #FFB347, #FF8C42)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                  e.target.style.background = "linear-gradient(135deg, #FF8C42, #FFB347)";
                }}
              >
                <span>📤</span> Send
              </button>
            </div>
            <div style={{
              marginTop: "10px",
              fontSize: "11px",
              color: "#8B8BA0",
              textAlign: "center"
            }}>
              🔒 Press Enter to send • Your messages are confidential
            </div>
          </div>
        </>
      )}

      <style>
        {`
          textarea {
            scrollbar-width: thin;
            scrollbar-color: #FF8C42 #FFF0E0;
          }
          textarea::-webkit-scrollbar {
            width: 6px;
          }
          textarea::-webkit-scrollbar-track {
            background: #FFF0E0;
            border-radius: 3px;
          }
          textarea::-webkit-scrollbar-thumb {
            background: #FF8C42;
            border-radius: 3px;
          }
          div::-webkit-scrollbar {
            width: 6px;
          }
          div::-webkit-scrollbar-track {
            background: #FFF0E0;
            border-radius: 3px;
          }
          div::-webkit-scrollbar-thumb {
            background: #FF8C42;
            border-radius: 3px;
          }
        `}
      </style>
    </div>
  );
}