import { Link } from "react-router-dom"

function Sidebar(){

  const sidebar = {
    width:"220px",
    background:"#1b5e20",
    color:"white",
    padding:"20px",
    minHeight:"100vh"
  }

  const link = {
    display:"block",
    color:"white",
    textDecoration:"none",
    marginTop:"15px"
  }

  return(

    <div style={sidebar}>

      <h3>Admin Panel</h3>

      <Link style={link} to="/admin">Dashboard</Link>
      <Link style={link} to="/">Home</Link>
      <Link style={link} to="/user">Student Portal</Link>

    </div>

  )

}

export default Sidebar