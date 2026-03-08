import { useEffect, useState } from "react";

function LoanBias() {

  const [data, setData] = useState(null);

  useEffect(() => {

    fetch("http://localhost:5000/api/bias")
      .then(res => res.json())
      .then(result => setData(result));

  }, []);

  if (!data) {
    return <div style={containerStyle}>Loading...</div>;
  }

  return (
    <div style={containerStyle}>

      <h1 style={{ marginBottom: "30px" }}>
        Loan Bias Detection
      </h1>

      <div style={glassCard}>

        <h3 style={{ marginBottom: "20px" }}>
          Loan Approval Bias Analysis
        </h3>

        <BiasRow label="Model Accuracy" value={data.accuracy} />
        <BiasRow label="Gender Bias" value={data.genderBias} />
        <BiasRow label="Region Bias" value={data.regionBias} />
        <BiasRow label="Income Bias" value={data.incomeBias} />
        <BiasRow label="Fraud Alerts" value={data.fraudAlerts} />

        <div style={statusStyle}>
          ✔ Compliance Status: {data.complianceStatus}
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

const containerStyle = {
  marginLeft: "240px",
  padding: "40px",
  minHeight: "100vh",
  background: "linear-gradient(135deg,#0f172a,#1e293b)",
  color: "white"
};

const glassCard = {
  background: "rgba(30,41,59,0.6)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px"
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  borderBottom: "1px solid #334155"
};

const statusStyle = {
  marginTop: "20px",
  color: "#22c55e",
  fontWeight: "bold"
};

export default LoanBias;