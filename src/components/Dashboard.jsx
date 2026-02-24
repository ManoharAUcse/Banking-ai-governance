import ComplianceCard from "./ComplianceCard";
import RiskForm from "./RiskForm";

function Dashboard() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>AI Governance Dashboard</h1>

      {/* Compliance Section */}
      <div style={cardWrapper}>
        <ComplianceCard />
      </div>

      {/* Risk Form Section */}
      <div style={{ marginTop: "50px" }}>
        <div style={glassCard}>
          <RiskForm />
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
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  color: "white"
};

const titleStyle = {
  marginBottom: "30px",
  fontWeight: "600",
  letterSpacing: "1px"
};

const glassCard = {
  background: "rgba(30, 41, 59, 0.6)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
};

const cardWrapper = {
  background: "rgba(30, 41, 59, 0.6)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
};

export default Dashboard;