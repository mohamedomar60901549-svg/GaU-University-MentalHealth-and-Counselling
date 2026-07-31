import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = (e) =>{
    e.preventDefault()

    if(email === "admin@gau.edu" && password === "admin123"){
      localStorage.setItem("admin","true")
      navigate("/admin")
    }else{
      alert("Invalid Admin Credentials")
    }
  }

  const container = {
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#f4f7f6"
  }

  const box = {
    background:"white",
    padding:"40px",
    borderRadius:"10px",
    width:"350px",
    boxShadow:"0 4px 15px rgba(0,0,0,0.1)"
  }

  const input = {
    width:"100%",
    padding:"10px",
    marginTop:"10px",
    marginBottom:"20px",
    borderRadius:"5px",
    border:"1px solid #ccc"
  }

  const button = {
    width:"100%",
    padding:"12px",
    background:"#2e7d32",
    color:"white",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer"
  }

  return(

    <div style={container}>

      <form style={box} onSubmit={handleLogin}>

        <h2 style={{textAlign:"center"}}>Admin Login</h2>

        <input
        style={input}
        type="email"
        placeholder="Admin Email"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        style={input}
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button style={button}>Login</button>

      </form>

    </div>

  )

}

export default AdminLogin