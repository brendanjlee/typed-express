import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const PORT = 3001;

// endpoints
app.get("/api/ping", (_req, res) => {
  console.log("someobody pinged here");
  res.send("pong");
});

// start server
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}/`);
});