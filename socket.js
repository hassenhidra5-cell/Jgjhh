module.exports = io => {
  io.on("connection", socket => {
    socket.on("call_signal", data => {
      io.to(data.to).emit("call_signal", data);
    });
    // Add chat, status, and moderation events
  });
};