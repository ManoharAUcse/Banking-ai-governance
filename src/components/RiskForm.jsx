import { useState } from "react";
import axios from "axios";

function RiskForm() {
  const [income, setIncome] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [risk, setRisk] = useState("");

  const predictRisk = () => {
    if (!income || !creditScore) {
      alert("Please enter all fields");
      return;
    }

    axios
      .post("http://localhost:5000/api/loan/predict", {
        income: Number(income),
        creditScore: Number(creditScore)
      })
      .then((res) => setRisk(res.data.risk))
      .catch((err) => console.log(err));
  };

  const cardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    maxWidth: "400px"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    marginBottom: "15px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600"
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: "20px" }}>
        Loan Risk Prediction
      </h3>

      <input
        type="number"
        placeholder="Enter Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Enter Credit Score"
        value={creditScore}
        onChange={(e) => setCreditScore(e.target.value)}
        style={inputStyle}
      />

      <button
        onClick={predictRisk}
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.background = "#1d4ed8")}
        onMouseOut={(e) => (e.target.style.background = "#2563eb")}
      >
        Predict Risk
      </button>

      {risk && (
        <h3
          style={{
            marginTop: "20px",
            color:
              risk === "High"
                ? "#ef4444"
                : risk === "Medium"
                ? "#f59e0b"
                : "#22c55e"
          }}
        >
          Risk Level: {risk}
        </h3>
      )}
    </div>
  );
}

export default RiskForm;
