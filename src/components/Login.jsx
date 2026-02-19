import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role) {
      localStorage.setItem("role", role);
      localStorage.setItem("isLoggedIn", "true"); // ✅ Important

      if (role === "admin") navigate("/dashboard");
      if (role === "auditor") navigate("/loan-bias");
    } else {
      alert("Please select a role");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f1f5f9"
      }}
    >
      <h2>🏦 Banking AI Login</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ padding: "10px", margin: "20px" }}
      >
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="auditor">Auditor</option>
      </select>

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          background: "#0f172a",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
