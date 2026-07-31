function DashboardCard({title,value}){

  const card = {
    background:"white",
    padding:"20px",
    borderRadius:"10px",
    boxShadow:"0 3px 10px rgba(0,0,0,0.1)",
    textAlign:"center"
  }

  return(

    <div style={card}>

      <h3>{title}</h3>
      <h1 style={{color:"#2e7d32"}}>{value}</h1>

    </div>

  )

}

export default DashboardCard