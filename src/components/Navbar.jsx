import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("isLoggedIn"); // ✅ Important
    navigate("/"); // Better than window.location.href
  };

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px 30px",
        fontSize: "18px",
        fontWeight: "600",
        marginLeft: "220px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <span>🏦 Banking AI Governance Dashboard</span>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span style={{ fontSize: "14px", opacity: 0.8 }}>
          Role: {role}
        </span>

        <button
          onClick={handleLogout}
          style={{
            padding: "6px 14px",
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500"
          }}
          onMouseOver={(e) => (e.target.style.background = "#dc2626")}
          onMouseOut={(e) => (e.target.style.background = "#ef4444")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
