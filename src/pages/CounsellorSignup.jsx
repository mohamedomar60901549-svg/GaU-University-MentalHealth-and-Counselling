import { useState } from "react";

export default function CounsellorSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        role: "counsellor"
      }),
    }).then(() => alert("Counsellor signup successful"));
  };

  return (
    <div>
      <h2>👩‍⚕️ Counsellor Signup</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signup}>Signup</button>
    </div>
  );
}