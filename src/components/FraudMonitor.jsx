function FraudMonitor() {
  return (
    <div
      style={{
        marginLeft: "240px",
        padding: "30px",
        background: "#f1f5f9",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h3>Fraud Detection Monitoring</h3>
        <p>High Risk Transactions: 4</p>
        <p>Medium Risk: 6</p>
        <p>Low Risk: 20</p>
        <p style={{ color: "red", fontWeight: "bold" }}>
          Risk Level: Medium
        </p>
      </div>
    </div>
  );
}

export default FraudMonitor;
