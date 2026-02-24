function LoanBias() {
  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: "30px" }}>Loan Bias Detection</h1>

      <div style={glassCard}>
        <h3 style={{ marginBottom: "20px" }}>
          Loan Approval Bias Analysis
        </h3>

        <BiasRow label="Gender Bias" value="8%" />
        <BiasRow label="Region Bias" value="5%" />
        <BiasRow label="Income Bias" value="6%" />

        <div style={statusStyle}>
          ✔ Status: Fair Model
        </div>
      </div>
    </div>
  );
}

function BiasRow({ label, value }) {
  return (
    <div style={rowStyle}>
      <span>{label}</span>
      <span style={{ fontWeight: "bold", color: "#3b82f6" }}>
        {value}
      </span>
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

const glassCard = {
  background: "rgba(30, 41, 59, 0.6)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  maxWidth: "500px"
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  borderBottom: "1px solid #334155"
};

const statusStyle = {
  marginTop: "20px",
  fontWeight: "bold",
  color: "#22c55e"
};

export default LoanBias;