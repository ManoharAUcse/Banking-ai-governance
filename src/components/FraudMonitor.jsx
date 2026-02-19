import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function FraudMonitor() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/fraud")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  const cardStyle = {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  };

  if (!data) {
    return (
      <div style={{ marginLeft: "240px", padding: "40px" }}>
        <p>Loading...</p>
      </div>
    );
  }

  const chartData = [
    { name: "High", value: data.highRisk },
    { name: "Medium", value: data.mediumRisk },
    { name: "Low", value: data.lowRisk }
  ];

  return (
    <div
      style={{
        marginLeft: "240px",
        padding: "40px",
        background: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "20px" }}>
          Fraud Detection Monitoring
        </h2>

        {/* Summary Numbers */}
        <div style={{ display: "flex", gap: "40px", marginBottom: "30px" }}>
          <div>
            <h4>High Risk</h4>
            <p style={{ fontSize: "22px", fontWeight: "bold", color: "#ef4444" }}>
              {data.highRisk}
            </p>
          </div>

          <div>
            <h4>Medium Risk</h4>
            <p style={{ fontSize: "22px", fontWeight: "bold", color: "#f59e0b" }}>
              {data.mediumRisk}
            </p>
          </div>

          <div>
            <h4>Low Risk</h4>
            <p style={{ fontSize: "22px", fontWeight: "bold", color: "#22c55e" }}>
              {data.lowRisk}
            </p>
          </div>
        </div>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        {/* Risk Level */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "bold",
            color:
              data.riskLevel === "High"
                ? "#ef4444"
                : data.riskLevel === "Medium"
                ? "#f59e0b"
                : "#22c55e"
          }}
        >
          Overall Risk Level: {data.riskLevel}
        </p>
      </div>
    </div>
  );
}

export default FraudMonitor;
