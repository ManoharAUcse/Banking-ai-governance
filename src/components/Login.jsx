import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!role) return alert("Please select a role");

    try {
      const API = "https://banking-ai-governance-1.onrender.com";

      const res = await axios.post(`${API}/api/login`, { role });

      console.log(res.data);

      localStorage.setItem("role", role);
      localStorage.setItem("isLoggedIn", "true");

      if (role === "admin") navigate("/dashboard");
      if (role === "auditor") navigate("/loan-bias");

    } catch (error) {
      console.error("Login error:", error.response || error);
      alert("Login failed");
    }
  };

  return (
    <div style={container}>

      {/* Glow */}
      <div style={bgGlow}></div>

      {/* Particles */}
      <div className="particles"></div>

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={card}
      >

        <motion.h1
          style={logo}
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          🏦
        </motion.h1>

        <motion.h2
          style={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Banking AI
        </motion.h2>

        <motion.p
          style={subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Secure AI Governance Platform
        </motion.p>

        {/* Select */}
        <motion.select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={input}
          whileFocus={{ scale: 1.03 }}
        >
          <option value="">Select your role</option>
          <option value="admin">Admin</option>
          <option value="auditor">Auditor</option>
        </motion.select>

        {/* Button */}
        <motion.button
          onClick={handleLogin}
          style={button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue
        </motion.button>

        <motion.p
          style={footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Powered by AI Governance System
        </motion.p>

      </motion.div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#020617,#0f172a,#020617)",
  position: "relative",
  overflow: "hidden"
};

const bgGlow = {
  position: "absolute",
  width: "400px",
  height: "400px",
  background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent)",
  filter: "blur(100px)",
  top: "20%",
  left: "30%"
};

const card = {
  backdropFilter: "blur(25px)",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "20px",
  padding: "40px",
  width: "90%",
  maxWidth: "350px",
  textAlign: "center",
  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
  border: "1px solid rgba(255,255,255,0.1)"
};

const logo = {
  fontSize: "40px",
  marginBottom: "10px"
};

const title = {
  color: "white",
  marginBottom: "5px"
};

const subtitle = {
  color: "#94a3b8",
  fontSize: "14px",
  marginBottom: "25px"
};

const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "rgba(15,23,42,0.8)",
  color: "white",
  marginBottom: "20px",
  outline: "none",
  fontSize: "14px"
};

const button = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg,#3b82f6,#6366f1)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

const footer = {
  marginTop: "20px",
  fontSize: "12px",
  color: "#64748b"
};

export default Login;