const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // JOIN ROOM (appointment-based)
  socket.on("joinRoom", (appointmentId) => {
    socket.join(appointmentId);
  });

  // SEND MESSAGE
  socket.on("sendMessage", (data) => {
    io.to(data.appointmentId).emit("receiveMessage", data);
  });

  // TYPING
  socket.on("typing", (appointmentId) => {
    socket.to(appointmentId).emit("typing");
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5001, () => {
  console.log("Server running on port 5001");
});