const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "🚀 DevOps App is running!",
    timestamp: new Date()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});