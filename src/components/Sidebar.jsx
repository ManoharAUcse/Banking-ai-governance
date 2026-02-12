import { Link } from "react-router-dom";

function Sidebar() {
  const linkStyle = {
    display: "block",
    margin: "15px 0",
    color: "white",
    textDecoration: "none"
  };

  return (
    <div
      style={{
        width: "220px",
        background: "#0f172a",
        color: "white",
        height: "100vh",
        padding: "20px",
        position: "fixed"
      }}
    >
      <h3 style={{ marginBottom: "30px" }}>🏦 Bank AI</h3>

      <Link to="/dashboard" style={linkStyle}>
        Dashboard
      </Link>
      <Link to="/loan-bias" style={linkStyle}>
        Loan Bias
      </Link>
      <Link to="/fraud" style={linkStyle}>
        Fraud Monitor
      </Link>
    </div>
  );
}

export default Sidebar;
