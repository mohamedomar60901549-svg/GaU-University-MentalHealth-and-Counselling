import { useState, useEffect } from "react";

export default function AppointmentForm() {
  const [regNo, setRegNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [started, setStarted] = useState("");
  const [seenBefore, setSeenBefore] = useState("No");
  const [description, setDescription] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const [counsellor, setCounsellor] = useState("");
  const [counsellors, setCounsellors] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  // FETCH COUNSELLORS
  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const onlyCounsellors = data.filter(
          (u) => u.role === "counsellor"
        );
        setCounsellors(onlyCounsellors);
      })
      .catch((error) => console.error("Error fetching counsellors:", error));
  }, []);

  const validateForm = () => {
    if (!regNo) {
      alert("❌ Please enter your registration number");
      return false;
    }
    if (!fullName) {
      alert("❌ Please enter your full name");
      return false;
    }
    if (!description) {
      alert("❌ Please describe how you are feeling");
      return false;
    }
    if (!counsellor) {
      alert("❌ Please select a counsellor");
      return false;
    }
    if (!preferredDate) {
      alert("❌ Please select a preferred date");
      return false;
    }
    if (!preferredTime) {
      alert("❌ Please select a preferred time");
      return false;
    }

    const selectedDate = new Date(preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      alert("❌ Please select a future date");
      return false;
    }

    return true;
  };

  const submit = () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const appointmentData = {
      regNo,
      fullName,
      age: age || "Not specified",
      phone: phone || "Not specified",
      started: started || "Not specified",
      seenBefore,
      description,
      preferredDate,
      preferredTime,
      studentEmail: user.email,
      studentId: user.id,
      studentName: user.name,
      counsellorEmail: counsellor,
      counsellorId: counsellors.find(c => c.email === counsellor)?.id,
      status: "pending",
      date: preferredDate,
      time: preferredTime,
      createdAt: new Date().toISOString()
    };

    console.log("Submitting appointment:", appointmentData);

    fetch("http://127.0.0.1:5000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to book appointment");
        }
        return res.json();
      })
      .then(() => {
        alert("✅ Appointment booked successfully! You can view it in 'My Appointments'.");
        
        setRegNo("");
        setFullName("");
        setAge("");
        setPhone("");
        setStarted("");
        setSeenBefore("No");
        setDescription("");
        setPreferredDate("");
        setPreferredTime("");
        setCounsellor("");
        setLoading(false);
        
        setTimeout(() => {
          window.location.href = "/student";
        }, 2000);
      })
      .catch((error) => {
        console.error("Error booking appointment:", error);
        alert("❌ Failed to book appointment. Please try again.");
        setLoading(false);
      });
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div style={{
      width: "100%",
      background: "white",
      borderRadius: "24px",
      padding: "30px",
      border: "1px solid rgba(255, 140, 66, 0.2)",
      boxSizing: "border-box",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <div style={{
          fontSize: "48px",
          marginBottom: "10px"
        }}>📅</div>
        <h3 style={{
          fontSize: "28px",
          fontWeight: "700",
          margin: "0 0 10px 0",
          background: "linear-gradient(135deg, #FF8C42 0%, #4CAF50 60%, #FFB347 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          Book Appointment
        </h3>
        <p style={{
          color: "#6B6B80",
          fontSize: "14px",
          margin: 0
        }}>
          Fill in your details to schedule a counselling session
        </p>
      </div>

      {/* Form */}
      <div>
        {/* Registration Number */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A4A5E",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            🎫 Registration Number <span style={{ color: "#FF8C42" }}>*</span>
          </label>
          <input
            placeholder="Enter your registration number"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
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

        {/* Full Name */}
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
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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

        {/* Age and Phone Row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          marginBottom: "20px"
        }}>
          <div>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#4A4A5E",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              🎂 Age
            </label>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
          <div>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#4A4A5E",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              📞 Phone Number
            </label>
            <input
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
        </div>

        {/* When did this start */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A4A5E",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            ⏰ When did this start?
          </label>
          <input
            placeholder="e.g., 2 weeks ago, 3 months ago"
            value={started}
            onChange={(e) => setStarted(e.target.value)}
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

        {/* Seen counsellor before */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A4A5E",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            🤝 Have you seen a counsellor before?
          </label>
          <select
            value={seenBefore}
            onChange={(e) => setSeenBefore(e.target.value)}
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
            <option value="No" style={{ background: "white", color: "#4A4A5E" }}>❌ No</option>
            <option value="Yes" style={{ background: "white", color: "#4A4A5E" }}>✅ Yes</option>
          </select>
        </div>

        {/* PREFERRED DATE */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A4A5E",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            📅 Preferred Date <span style={{ color: "#FF8C42" }}>*</span>
          </label>
          <input
            type="date"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            min={getTodayDate()}
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
              boxSizing: "border-box",
              cursor: "pointer"
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
          <p style={{
            color: "#8B8BA0",
            fontSize: "11px",
            marginTop: "5px",
            marginBottom: 0
          }}>
            Please select a future date for your appointment
          </p>
        </div>

        {/* PREFERRED TIME */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A4A5E",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            ⏰ Preferred Time <span style={{ color: "#FF8C42" }}>*</span>
          </label>
          <select
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
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
            <option value="" style={{ background: "white", color: "#4A4A5E" }}>Select preferred time</option>
            <option value="09:00" style={{ background: "white", color: "#4A4A5E" }}>09:00 AM</option>
            <option value="10:00" style={{ background: "white", color: "#4A4A5E" }}>10:00 AM</option>
            <option value="11:00" style={{ background: "white", color: "#4A4A5E" }}>11:00 AM</option>
            <option value="12:00" style={{ background: "white", color: "#4A4A5E" }}>12:00 PM</option>
            <option value="13:00" style={{ background: "white", color: "#4A4A5E" }}>01:00 PM</option>
            <option value="14:00" style={{ background: "white", color: "#4A4A5E" }}>02:00 PM</option>
            <option value="15:00" style={{ background: "white", color: "#4A4A5E" }}>03:00 PM</option>
            <option value="16:00" style={{ background: "white", color: "#4A4A5E" }}>04:00 PM</option>
            <option value="17:00" style={{ background: "white", color: "#4A4A5E" }}>05:00 PM</option>
          </select>
          <p style={{
            color: "#8B8BA0",
            fontSize: "11px",
            marginTop: "5px",
            marginBottom: 0
          }}>
            Select your preferred time slot
          </p>
        </div>

        {/* Description */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A4A5E",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            💭 Describe how you are feeling <span style={{ color: "#FF8C42" }}>*</span>
          </label>
          <textarea
            placeholder="Please describe your concerns, feelings, or what you'd like to discuss..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
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
              fontFamily: "inherit",
              resize: "vertical",
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

        {/* Counsellor Selection */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A4A5E",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            👨‍⚕️ Select Counsellor <span style={{ color: "#FF8C42" }}>*</span>
          </label>
          <select
            value={counsellor}
            onChange={(e) => setCounsellor(e.target.value)}
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
            <option value="" style={{ background: "white", color: "#4A4A5E" }}>Select a counsellor</option>
            {counsellors.map((c) => (
              <option key={c.id} value={c.email} style={{ background: "white", color: "#4A4A5E" }}>
                {c.name || c.email}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          onClick={submit}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: loading ? "linear-gradient(135deg, #B0B0B0, #909090)" : "linear-gradient(135deg, #FF8C42, #FFB347)",
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
          {loading ? "⏳ Booking..." : "📅 Submit Appointment Request"}
        </button>

        {/* Back to Dashboard Link */}
        <div style={{
          textAlign: "center",
          paddingTop: "15px",
          borderTop: "1px solid rgba(0,0,0,0.08)"
        }}>
          <a
            href="/student"
            style={{
              color: "#FF8C42",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "500",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#4CAF50";
              e.target.style.transform = "translateX(-5px)";
              e.target.style.display = "inline-block";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#FF8C42";
              e.target.style.transform = "translateX(0)";
            }}
          >
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}