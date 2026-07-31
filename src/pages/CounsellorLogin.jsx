import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CounsellorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("http://127.0.0.1:3000/users")
      .then((res) => res.json())
      .then((data) => {
        const user = data.find(
          (u) =>
            u.email === email &&
            u.password === password &&
            u.role === "counsellor"
        );

        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/counsellor");
        } else {
          alert("Invalid counsellor login");
        }
      });
  };

  return (
    <div className="container">
      <h2>👩‍⚕️ Counsellor Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default CounsellorLogin;