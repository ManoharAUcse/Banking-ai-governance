import { useEffect, useState } from "react";
import axios from "axios";

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

        {!data ? (
          <p>Loading...</p>
        ) : (
          <>
            <div style={{ display: "flex", gap: "40px", marginBottom: "25px" }}>
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

            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color:
                  data.riskLevel === "High"
                    ? "red"
                    : data.riskLevel === "Medium"
                      ? "orange"
                      : "green"
              }}
            >
              Risk Level: {data.riskLevel}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default FraudMonitor;
