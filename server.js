import express from "express";
const app = express();

app.use(express.static("."));

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello Janu ❤️ backend is working!"
  });
});

export default app;
