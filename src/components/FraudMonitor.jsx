import { useEffect, useState } from "react";
import axios from "axios";

function FraudMonitor() {
  const [data, setData] = useState(null);
  const [animatedHigh, setAnimatedHigh] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/fraud")
      .then((res) => {
        setData(res.data);
        animateCounter(Number(res.data.highRiskCount));
      })
      .catch((err) => console.log(err));
  }, []);

  const animateCounter = (target) => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setAnimatedHigh(start);
      if (start >= target) clearInterval(interval);
    }, 40);
  };

  if (!data)
    return <div style={loadingStyle}>Loading Fraud Intelligence...</div>;

  const total = Number(data.totalPredictions) || 0;
  const high = Number(data.highRiskCount) || 0;
  const safe = total - high;

  const percent = total ? ((high / total) * 100).toFixed(1) : 0;

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>AI Fraud Intelligence Center</h1>

      {/* STATUS BADGE */}
      <div style={{
        ...badgeStyle,
        background:
          data.fraudRiskLevel === "High"
            ? "#ef4444"
            : data.fraudRiskLevel === "Medium"
            ? "#f59e0b"
            : "#22c55e"
      }}>
        {data.fraudRiskLevel} RISK
      </div>

      {/* STAT CARDS */}
      <div style={cardContainer}>
        <GlassCard title="Total Predictions" value={total} />
        <GlassCard title="High Risk Cases" value={animatedHigh} color="#ef4444" />
        <GlassCard title="Safe Loans" value={safe} color="#22c55e" />
        <GlassCard title="Fraud %" value={`${percent}%`} color="#f59e0b" />
      </div>

      {/* PROGRESS BAR */}
      <div style={progressWrapper}>
        <div style={progressLabel}>Fraud Risk Distribution</div>
        <div style={progressBarBg}>
          <div
            style={{
              ...progressBarFill,
              width: `${percent}%`
            }}
          />
        </div>
      </div>

      {/* CIRCULAR PROGRESS */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <svg width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="#334155"
            strokeWidth="15"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ef4444"
            strokeWidth="15"
            fill="none"
            strokeDasharray={502}
            strokeDashoffset={502 - (502 * percent) / 100}
            strokeLinecap="round"
            style={{ transition: "1s ease" }}
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="24"
          >
            {percent}%
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ---------- Glass Card Component ---------- */

function GlassCard({ title, value, color }) {
  return (
    <div style={{
      ...glassCardStyle,
      border: `1px solid ${color || "#334155"}`
    }}>
      <h4>{title}</h4>
      <h2 style={{ color: color || "white" }}>{value}</h2>
    </div>
  );
}

/* ---------- STYLES ---------- */

const containerStyle = {
  marginLeft: "240px",
  padding: "40px",
  minHeight: "100vh",
  background: "linear-gradient(135deg,#0f172a,#1e293b,#0f172a)",
  color: "white",
  animation: "fadeIn 0.8s ease"
};

const titleStyle = {
  marginBottom: "20px",
  fontWeight: "bold",
  letterSpacing: "1px"
};

const badgeStyle = {
  display: "inline-block",
  padding: "8px 20px",
  borderRadius: "30px",
  fontWeight: "bold",
  marginBottom: "30px"
};

const cardContainer = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap"
};

const glassCardStyle = {
  backdropFilter: "blur(12px)",
  background: "rgba(30,41,59,0.5)",
  padding: "25px",
  borderRadius: "15px",
  minWidth: "200px",
  transition: "0.3s",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
};

const progressWrapper = {
  marginTop: "40px"
};

const progressLabel = {
  marginBottom: "10px"
};

const progressBarBg = {
  height: "20px",
  background: "#334155",
  borderRadius: "10px",
  overflow: "hidden"
};

const progressBarFill = {
  height: "100%",
  background: "linear-gradient(90deg,#ef4444,#f59e0b)",
  transition: "1s ease"
};

const loadingStyle = {
  marginLeft: "240px",
  padding: "40px",
  minHeight: "100vh",
  background: "#0f172a",
  color: "white"
};

export default FraudMonitor;