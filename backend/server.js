const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================================
   LOGIN API
========================================= */
app.post("/api/login", (req, res) => {
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({ message: "Role is required" });
  }

  const sql = "INSERT INTO users (role) VALUES (?)";

  db.query(sql, [role], (err) => {
    if (err) {
      console.error("Login insert error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "Login recorded", role });
  });
});

/* =========================================
   LOAN RISK PREDICTION
========================================= */
app.post("/api/loan/predict", (req, res) => {
  const { income, creditScore } = req.body;

  if (income == null || creditScore == null) {
    return res.status(400).json({ message: "Income and Credit Score required" });
  }

  const incomeNum = Number(income);
  const creditNum = Number(creditScore);

  let risk = "Low";

  if (creditNum < 600 || incomeNum < 30000) {
    risk = "High";
  } else if (creditNum < 700) {
    risk = "Medium";
  }

  const sql = `
    INSERT INTO risk_predictions (income, credit_score, risk)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [incomeNum, creditNum, risk], (err) => {
    if (err) {
      console.error("Prediction insert error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ risk });
  });
});

/* =========================================
   ANALYTICS DASHBOARD API
========================================= */
app.get("/api/analytics", (req, res) => {
  const sql = `
    SELECT 
      COUNT(*) as total,
      COALESCE(SUM(CASE WHEN risk='High' THEN 1 ELSE 0 END),0) as high,
      COALESCE(SUM(CASE WHEN risk='Medium' THEN 1 ELSE 0 END),0) as medium,
      COALESCE(SUM(CASE WHEN risk='Low' THEN 1 ELSE 0 END),0) as low
    FROM risk_predictions
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Analytics error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result[0]);
  });
});

/* =========================================
   FRAUD MONITOR API
========================================= */
app.get("/api/fraud", (req, res) => {
  const sql = `
    SELECT 
      COUNT(*) as total,
      COALESCE(SUM(CASE WHEN risk='High' THEN 1 ELSE 0 END),0) as high
    FROM risk_predictions
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Fraud error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    const total = result[0].total || 0;
    const high = result[0].high || 0;

    let fraudRiskLevel = "Low";

    if (total > 0) {
      const percent = (high / total) * 100;
      if (percent > 40) fraudRiskLevel = "High";
      else if (percent > 20) fraudRiskLevel = "Medium";
    }

    res.json({
      totalPredictions: total,
      highRiskCount: high,
      fraudRiskLevel
    });
  });
});
app.get("/api/fraud", (req, res) => {
  const sql = `
    SELECT
      COUNT(*) as total,
      COALESCE(SUM(CASE WHEN risk='High' THEN 1 ELSE 0 END),0) as high,
      COALESCE(SUM(CASE WHEN risk='Medium' THEN 1 ELSE 0 END),0) as medium,
      COALESCE(SUM(CASE WHEN risk='Low' THEN 1 ELSE 0 END),0) as low
    FROM risk_predictions
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Fraud error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    const data = result[0];

    let fraudRiskLevel = "Low";

    if (data.total > 0) {
      const percent = (data.high / data.total) * 100;
      if (percent > 40) fraudRiskLevel = "High";
      else if (percent > 20) fraudRiskLevel = "Medium";
    }

    res.json({
      total: Number(data.total),
      high: Number(data.high),
      medium: Number(data.medium),
      low: Number(data.low),
      fraudRiskLevel
    });
  });
});
/* =========================================
   SERVER START
========================================= */
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});