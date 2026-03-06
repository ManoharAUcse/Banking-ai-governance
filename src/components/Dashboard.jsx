import ComplianceCard from "./ComplianceCard";
import RiskForm from "./RiskForm";
import { useEffect, useState } from "react";
import RiskAnalytics from "./RiskAnalytics";

function Dashboard() {

  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  const [analytics, setAnalytics] = useState({
    total: 0,
    high: 0,
    medium: 0,
    low: 0
  });

  useEffect(() => {

    fetch("http://localhost:5000/api/governance-score")
      .then(res => res.json())
      .then(data => {
        setScore(data.governanceScore);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });

    /* -------- Fetch Analytics -------- */

    fetch("http://localhost:5000/api/analytics")
      .then(res => res.json())
      .then(data => {
        setAnalytics(data);
      })
      .catch(err => console.log(err));

  }, []);

  return (
    <div style={containerStyle}>

      <h1 style={titleStyle}>
        AI Governance Dashboard
      </h1>

      {/* Governance Score Card */}

      {loading ? (

        <div style={scoreCard}>
          <h3>Loading Governance Score...</h3>
        </div>

      ) : score !== null && (

        <div style={scoreCard}>

          <h3>AI Governance Score</h3>

          <h1 style={{
            color:
              score > 85
                ? "#22c55e"
                : score > 70
                ? "#f59e0b"
                : "#ef4444"
          }}>
            {score} / 100
          </h1>

          <p>AI system reliability and compliance rating</p>

        </div>

      )}

      {/* System Status Cards */}

      <div style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
        flexWrap: "wrap"
      }}>

        <div style={{
          background:"#1e293b",
          padding:"20px",
          borderRadius:"10px",
          minWidth:"200px"
        }}>
          <h4>Total Predictions</h4>
          <h2>{analytics.total}</h2>
        </div>

        <div style={{
          background:"#1e293b",
          padding:"20px",
          borderRadius:"10px",
          minWidth:"200px"
        }}>
          <h4>High Risk Loans</h4>
          <h2 style={{color:"#ef4444"}}>{analytics.high}</h2>
        </div>

        <div style={{
          background:"#1e293b",
          padding:"20px",
          borderRadius:"10px",
          minWidth:"200px"
        }}>
          <h4>System Status</h4>
          <h2 style={{color:"#22c55e"}}>Active</h2>
        </div>

      </div>

      {/* Compliance Card */}

      <div style={cardWrapper}>
        <ComplianceCard />
      </div>

      {/* Loan Risk System */}

      <div style={{ marginTop: "50px" }}>
        <div style={glassCard}>
          <RiskForm />
        </div>
      </div>

      {/* Risk Analytics Chart */}

      <div style={{ marginTop: "50px" }}>
        <div style={glassCard}>
          <RiskAnalytics />
        </div>
      </div>

    </div>
  );
}

/* ---------- Styles ---------- */

const containerStyle = {
  marginLeft: "240px",
  padding: "40px",
  minHeight: "100vh",
  background: "linear-gradient(135deg,#0f172a,#1e293b)",
  color: "white"
};

const titleStyle = {
  marginBottom: "30px",
  fontWeight: "600",
  letterSpacing: "1px"
};

const scoreCard = {
  background: "#1e293b",
  padding: "25px",
  borderRadius: "12px",
  marginBottom: "30px",
  maxWidth: "320px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
};

const glassCard = {
  background: "rgba(30,41,59,0.6)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
};

const cardWrapper = {
  background: "rgba(30,41,59,0.6)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
};

export default Dashboard;