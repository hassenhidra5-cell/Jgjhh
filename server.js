const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const { createClient } = require("redis");
const socketio = require("socket.io");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000", credentials: true }));

const redisClient = createClient({ url: process.env.REDIS_URL });
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

mongoose.connect(process.env.MONGO_URI);

app.use("/api/auth", require("./routes/auth"));
app.use("/api/chat", require("./routes/chat"));
app.use("/api/status", require("./routes/status"));
app.use("/api/stories", require("./routes/stories"));
app.use("/api/channels", require("./routes/channels"));
app.use("/api/moderation", require("./routes/moderation"));
app.use("/api/payments", require("./routes/payments"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/invite", require("./routes/invite"));

const server = http.createServer(app);
const io = socketio(server, { cors: { origin: "*" } });

require("./routes/socket")(io);

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});