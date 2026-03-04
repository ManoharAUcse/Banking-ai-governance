import ComplianceCard from "./ComplianceCard";
import RiskForm from "./RiskForm";
import { useEffect, useState } from "react";

function Dashboard() {

  const [score, setScore] = useState(null);

  useEffect(() => {

    fetch("http://localhost:5000/api/governance-score")
      .then(res => res.json())
      .then(data => setScore(data.governanceScore));

  }, []);

  return (
    <div style={containerStyle}>

      <h1 style={titleStyle}>
        AI Governance Dashboard
      </h1>

      {score && (
        <div style={scoreCard}>
          <h3>AI Governance Score</h3>
          <h1>{score} / 100</h1>
        </div>
      )}

      <div style={cardWrapper}>
        <ComplianceCard />
      </div>

      <div style={{ marginTop: "50px" }}>
        <div style={glassCard}>
          <RiskForm />
        </div>
      </div>

    </div>
  );
}

const containerStyle = {
  marginLeft: "240px",
  padding: "40px",
  minHeight: "100vh",
  background: "linear-gradient(135deg,#0f172a,#1e293b)",
  color: "white"
};

const titleStyle = {
  marginBottom: "30px",
  fontWeight: "600"
};

const scoreCard = {
  background: "#1e293b",
  padding: "25px",
  borderRadius: "12px",
  marginBottom: "30px",
  maxWidth: "300px",
  textAlign: "center"
};

const glassCard = {
  background: "rgba(30,41,59,0.6)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px"
};

const cardWrapper = {
  background: "rgba(30,41,59,0.6)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px"
};

export default Dashboard;