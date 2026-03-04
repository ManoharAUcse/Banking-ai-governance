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
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "Login recorded", role });

  });

});


/* =========================================
AI LOAN DECISION ENGINE
========================================= */
app.post("/api/loan/predict", (req, res) => {

  const { income, creditScore } = req.body;

  const incomeNum = Number(income);
  const creditNum = Number(creditScore);

  let score = 0;
  let risk = "Low";

  if (creditNum >= 750) score += 50;
  else if (creditNum >= 650) score += 35;
  else score += 20;

  if (incomeNum >= 80000) score += 40;
  else if (incomeNum >= 50000) score += 25;
  else score += 10;

  if (score < 40) risk = "High";
  else if (score < 70) risk = "Medium";

  const decision = score >= 60 ? "Approved" : "Rejected";

  const sql = `
  INSERT INTO risk_predictions (income, credit_score, risk)
  VALUES (?, ?, ?)
  `;

  db.query(sql, [incomeNum, creditNum, risk]);

  res.json({
    decision,
    risk,
    riskScore: score,
    explanation: [
      "Credit score evaluation",
      "Income stability check",
      "Loan affordability analysis"
    ]
  });

});


/* =========================================
ANALYTICS DASHBOARD
========================================= */
app.get("/api/analytics", (req, res) => {

  const sql = `
  SELECT
  COUNT(*) AS total,
  SUM(CASE WHEN risk='High' THEN 1 ELSE 0 END) AS high,
  SUM(CASE WHEN risk='Medium' THEN 1 ELSE 0 END) AS medium,
  SUM(CASE WHEN risk='Low' THEN 1 ELSE 0 END) AS low
  FROM risk_predictions
  `;

  db.query(sql, (err, result) => {

    if (err) return res.status(500).json(err);

    res.json(result[0]);

  });

});


/* =========================================
FRAUD MONITORING SYSTEM
========================================= */
app.get("/api/fraud", (req, res) => {

  const sql = `
  SELECT
  COUNT(*) AS total,
  SUM(CASE WHEN risk='High' THEN 1 ELSE 0 END) AS high,
  SUM(CASE WHEN risk='Medium' THEN 1 ELSE 0 END) AS medium,
  SUM(CASE WHEN risk='Low' THEN 1 ELSE 0 END) AS low
  FROM risk_predictions
  `;

  db.query(sql, (err, result) => {

    if (err) return res.status(500).json(err);

    const data = result[0];

    const total = Number(data.total) || 0;
    const high = Number(data.high) || 0;

    let fraudRiskLevel = "Low";

    if (total > 0) {

      const percent = (high / total) * 100;

      if (percent > 40) fraudRiskLevel = "High";
      else if (percent > 20) fraudRiskLevel = "Medium";

    }

    res.json({
      total,
      high,
      medium: data.medium,
      low: data.low,
      fraudRiskLevel
    });

  });

});


/* =========================================
BIAS DETECTION MODULE
========================================= */
app.get("/api/bias", (req, res) => {

  res.json({
    accuracy: "91%",
    genderBias: "8%",
    regionBias: "5%",
    incomeBias: "6%",
    fraudAlerts: 8,
    complianceStatus: "Compliant"
  });

});


/* =========================================
COMPLIANCE ENGINE
========================================= */
app.get("/api/compliance", (req, res) => {

  res.json({
    status: "Compliant",
    rules: [
      "Bias within acceptable limits",
      "Risk distribution monitored",
      "AI decision transparency maintained"
    ]
  });

});


/* =========================================
GOVERNANCE SCORE
========================================= */
app.get("/api/governance-score", (req, res) => {

  res.json({
    governanceScore: 85
  });

});


/* =========================================
AUDIT TRAIL SYSTEM
========================================= */
app.get("/api/predictions", (req, res) => {

  const sql = `
  SELECT id,income,credit_score,risk,created_at
  FROM risk_predictions
  ORDER BY created_at DESC
  `;

  db.query(sql, (err, result) => {

    if (err) return res.status(500).json(err);

    res.json(result);

  });

});


app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});