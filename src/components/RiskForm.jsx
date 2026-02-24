import { useState } from "react";
import axios from "axios";

function RiskForm() {
  const [income, setIncome] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [employment, setEmployment] = useState("");
  const [risk, setRisk] = useState("");
  const [score, setScore] = useState(null);

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/loan/predict", {
        income,
        creditScore,
        loanAmount,
        employment
      })
      .then((res) => {
        console.log(res.data);
        setRisk(res.data.risk);
        setScore(res.data.score);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ marginLeft: "240px", padding: "40px" }}>
      <h2>AI Loan Risk Prediction</h2>

      <input
        type="number"
        placeholder="Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Credit Score"
        value={creditScore}
        onChange={(e) => setCreditScore(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />
      <br /><br />

      <select
        value={employment}
        onChange={(e) => setEmployment(e.target.value)}
      >
        <option value="">Select Employment</option>
        <option value="Government">Government</option>
        <option value="Private">Private</option>
        <option value="Self-Employed">Self-Employed</option>
      </select>
      <br /><br />

      <button onClick={handleSubmit}>Predict Risk</button>

      {score !== null && (
  <div style={{ marginTop: "20px" }}>
    <h3>Risk Level: {risk}</h3>
    <h4>AI Score: {score} / 100</h4>
  </div>
)}

    </div>
  );
}

export default RiskForm;
