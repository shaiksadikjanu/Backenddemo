import express from "express";
const app = express();

app.use(express.static("public"));

app.get("/api/message", (req, res) => {
  res.json({
    success: true,
    message: "Hello Janu ❤️ Your backend is working perfectly!"
  });
});

export default app;
