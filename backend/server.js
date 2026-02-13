const express = require("express");
const cors = require("cors");

const loanRoutes = require("./routes/loanRoutes");
const fraudRoutes = require("./routes/fraudRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Route files
app.use("/api/loan", loanRoutes);
app.use("/api/fraud", fraudRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Dashboard Test Route (Dynamic Data)
app.get("/api/test", (req, res) => {
  res.json({
    accuracy: "92%",
    biasLevel: "Low",
    fraudAlerts: 12,
    status: "Compliant"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
