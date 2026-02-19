const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================================
   LOGIN API (Stores login in users table)
========================================= */
app.post("/api/login", (req, res) => {
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({ message: "Role is required" });
  }

  const sql = "INSERT INTO users (role) VALUES (?)";

  db.query(sql, [role], (err, result) => {
    if (err) {
      console.error("Login insert error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "Login recorded", role });
  });
});


/* =========================================
   LOAN RISK PREDICTION API
========================================= */
app.post("/api/loan/predict", (req, res) => {
  const { income, creditScore } = req.body;

  // ✅ Proper validation
  if (income == null || creditScore == null) {
    return res.status(400).json({ message: "Income and Credit Score required" });
  }

  // Convert to numbers safely
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
   FETCH ALL LOGIN RECORDS
========================================= */
app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users ORDER BY login_time DESC", (err, results) => {
    if (err) {
      console.error("Fetch users error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(results);
  });
});


/* =========================================
   FETCH RISK PREDICTIONS HISTORY
========================================= */
app.get("/api/risk-predictions", (req, res) => {
  db.query(
    "SELECT * FROM risk_predictions ORDER BY created_at DESC",
    (err, results) => {
      if (err) {
        console.error("Fetch predictions error:", err);
        return res.status(500).json({ error: "Database error" });
      }

      res.json(results);
    }
  );
});


/* =========================================
   SERVER START
========================================= */
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
