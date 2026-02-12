function ComplianceCard() {
  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "220px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <div style={cardStyle}>
        <h4>Model Accuracy</h4>
        <h2 style={{ color: "green" }}>92%</h2>
      </div>

      <div style={cardStyle}>
        <h4>Bias Level</h4>
        <h2 style={{ color: "orange" }}>Low</h2>
      </div>

      <div style={cardStyle}>
        <h4>Fraud Alerts</h4>
        <h2 style={{ color: "red" }}>12</h2>
      </div>

      <div style={cardStyle}>
        <h4>Compliance Status</h4>
        <h2 style={{ color: "green" }}>Compliant</h2>
      </div>
    </div>
  );
}

export default ComplianceCard;
