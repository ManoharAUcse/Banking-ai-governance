import { useState } from "react";
import axios from "axios";

function RiskForm() {

  const [income, setIncome] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [employment, setEmployment] = useState("");

  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");

  const [risk, setRisk] = useState("");
  const [score, setScore] = useState(null);
  const [decision, setDecision] = useState("");
  const [explanation, setExplanation] = useState([]);

  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [takeHome, setTakeHome] = useState(null);

  const [eligibleLoan, setEligibleLoan] = useState(null);

  /* ---------------- AI RISK PREDICTION ---------------- */

  const handleSubmit = () => {

    if (!income || !creditScore) {
      alert("Please fill required fields");
      return;
    }

    axios
      .post("http://localhost:5000/api/loan/predict", {
        income,
        creditScore,
        loanAmount,
        employment
      })
      .then((res) => {

        setRisk(res.data.risk);
        setScore(res.data.riskScore);
        setDecision(res.data.decision);
        setExplanation(res.data.explanation || []);

      })
      .catch((err) => console.log(err));

  };

  /* ---------------- EMI CALCULATION ---------------- */

  const calculateEMI = () => {

    const P = Number(loanAmount);
    const R = Number(interestRate) / 12 / 100;
    const N = Number(years) * 12;

    if (!P || !R || !N) {
      alert("Enter Loan Amount, Interest Rate and Years");
      return;
    }

    const emiValue =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    const totalPayment = emiValue * N;
    const interest = totalPayment - P;
    const salaryLeft = income - emiValue;

    setEmi(emiValue.toFixed(0));
    setTotalInterest(interest.toFixed(0));
    setTakeHome(salaryLeft.toFixed(0));
  };

  /* ---------------- LOAN ELIGIBILITY ---------------- */

  const calculateEligibility = () => {

    const salary = Number(income);
    const rate = Number(interestRate) / 12 / 100;
    const months = Number(years) * 12;

    if (!salary || !rate || !months) {
      alert("Enter Salary, Interest Rate and Years");
      return;
    }

    // Bank allows about 40% salary as EMI
    const maxEMI = salary * 0.4;

    const loan =
      (maxEMI * (Math.pow(1 + rate, months) - 1)) /
      (rate * Math.pow(1 + rate, months));

    setEligibleLoan(loan.toFixed(0));
  };

  return (

    <div style={{ marginLeft: "240px", padding: "40px", color: "white" }}>

      <h2>AI Loan Risk Prediction</h2>

      {/* Salary */}

      <input
        type="number"
        placeholder="Monthly Salary"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />

      <br /><br />

      {/* Credit Score */}

      <input
        type="number"
        placeholder="Credit Score"
        value={creditScore}
        onChange={(e) => setCreditScore(e.target.value)}
      />

      <br /><br />

      {/* Loan Amount */}

      <input
        type="number"
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />

      <br /><br />

      {/* Employment */}

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

      {/* Interest Rate */}

      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />

      <br /><br />

      {/* Loan Years */}

      <input
        type="number"
        placeholder="Loan Duration (Years)"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />

      <br /><br />

      {/* Buttons */}

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          background: "#3b82f6",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold",
          marginRight: "10px"
        }}
      >
        Predict Risk
      </button>

      <button
        onClick={calculateEMI}
        style={{
          padding: "10px 20px",
          background: "#22c55e",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold",
          marginRight: "10px"
        }}
      >
        Calculate EMI
      </button>

      <button
        onClick={calculateEligibility}
        style={{
          padding: "10px 20px",
          background: "#f59e0b",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold"
        }}
      >
        Check Loan Eligibility
      </button>

      {/* ---------------- AI RESULT ---------------- */}

      {score !== null && (

        <div style={{
          marginTop: "30px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px"
        }}>

          <h3>Decision: {decision}</h3>

          <h3 style={{
            color:
              risk === "High"
                ? "#ef4444"
                : risk === "Medium"
                ? "#f59e0b"
                : "#22c55e"
          }}>
            Risk Level: {risk}
          </h3>

          <h4>AI Score: {score} / 100</h4>

          <p>Prediction Time: {new Date().toLocaleString()}</p>

          <h4>AI Decision Explanation</h4>

          {explanation.map((item, index) => (
            <p key={index}>✔ {item}</p>
          ))}

        </div>

      )}

      {/* ---------------- EMI RESULT ---------------- */}

      {emi && (

        <div style={{
          marginTop: "30px",
          background: "#111827",
          padding: "20px",
          borderRadius: "10px"
        }}>

          <h3>Loan EMI Analysis</h3>

          <p>Monthly EMI: ₹{emi}</p>

          <p>Total Interest Payable: ₹{totalInterest}</p>

          <p>Take Home Salary After EMI: ₹{takeHome}</p>

          <p>Loan Duration: {years} Years</p>

        </div>

      )}

      {/* ---------------- LOAN ELIGIBILITY ---------------- */}

      {eligibleLoan && (

        <div style={{
          marginTop: "30px",
          background: "#1f2937",
          padding: "20px",
          borderRadius: "10px"
        }}>

          <h3>Loan Eligibility Analysis</h3>

          <p>Monthly Salary: ₹{income}</p>

          <p>Maximum EMI Allowed (40% rule): ₹{(income * 0.4).toFixed(0)}</p>

          <p>Maximum Loan Bank Can Approve: ₹{eligibleLoan}</p>

          <p>Loan Duration: {years} Years</p>

        </div>

      )}

    </div>

  );
}

export default RiskForm;