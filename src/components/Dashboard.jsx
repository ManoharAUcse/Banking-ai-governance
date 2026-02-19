import ComplianceCard from "./ComplianceCard";
import RiskForm from "./RiskForm";

function Dashboard() {
  return (
    <div
      style={{
        marginLeft: "240px",
        padding: "40px",
        background: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ marginBottom: "30px", fontWeight: "600" }}>
        AI Governance Dashboard
      </h1>

      {/* Compliance Section */}
      <ComplianceCard />

      {/* Risk Form Section */}
      <div style={{ marginTop: "50px" }}>
        <RiskForm />
      </div>
    </div>
  );
}

export default Dashboard;
