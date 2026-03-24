import { NavLink } from "react-router-dom";
import { translations } from "../translations";
import { useState, useEffect } from "react";

function Sidebar({ language }) {

  const t = translations[language];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ☰ Toggle Button (only mobile) */}
      {isMobile && (
        <button
          onClick={() => setOpen(!open)}
          style={{
            position: "fixed",
            top: "15px",
            left: "15px",
            zIndex: 1100,
            fontSize: "20px",
            background: "#020617",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px"
          }}
        >
          ☰
        </button>
      )}

      {/* Overlay */}
      {isMobile && open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 999
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          ...sidebarStyle,
          left: isMobile ? (open ? "0" : "-240px") : "0",
          transition: "0.3s",
          zIndex: 1000
        }}
      >

        <h2 style={logoStyle}>🤖 AI Panel</h2>

        <NavItem to="/dashboard" label={t.dashboard} icon="📊" />
        <NavItem to="/loan-bias" label={t.loanBias} icon="⚖️" />
        <NavItem to="/fraud" label={t.fraudMonitor} icon="🚨" />
        <NavItem to="/loan-regulations" label={t.loanRegulations} icon="📜" />
        <NavItem to="/government-schemes" label={t.governmentSchemes} icon="🏛️" />

      </div>
    </>
  );
}

/* ---------- Nav Item ---------- */

function NavItem({ to, label, icon }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? "rgba(59,130,246,0.2)" : "transparent",
        borderLeft: isActive ? "4px solid #3b82f6" : "4px solid transparent",
        transform: isActive ? "scale(1.02)" : "scale(1)"
      })}
    >
      <span style={iconStyle}>{icon}</span>
      {label}
    </NavLink>
  );
}

/* ---------- Styles ---------- */

const sidebarStyle = {
  width: "240px",
  height: "100vh",
  background: "linear-gradient(180deg,#020617,#0f172a,#020617)",
  position: "fixed",
  left: 0,
  top: 0,
  paddingTop: "20px",
  boxShadow: "5px 0 20px rgba(0,0,0,0.5)",
  display: "flex",
  flexDirection: "column"
};

const logoStyle = {
  color: "white",
  textAlign: "center",
  marginBottom: "30px",
  fontWeight: "bold",
  letterSpacing: "1px"
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "14px 20px",
  color: "#cbd5f5",
  textDecoration: "none",
  transition: "all 0.3s ease",
  fontWeight: "500"
};

const iconStyle = {
  fontSize: "18px"
};

export default Sidebar;