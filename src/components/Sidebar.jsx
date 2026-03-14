import { NavLink } from "react-router-dom";
import { translations } from "../translations";

function Sidebar({ language }) {

  const t = translations[language];

  const linkStyle = {
    display: "block",
    padding: "12px 20px",
    color: "white",
    textDecoration: "none"
  };

  const activeStyle = {
    background: "#1e293b"
  };

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#0f172a",
        position: "fixed",
        left: 0,
        top: 0,
        paddingTop: "60px"
      }}
    >

      <NavLink
        to="/dashboard"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        {t.dashboard}
      </NavLink>

      <NavLink
        to="/loan-bias"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        {t.loanBias}
      </NavLink>

      <NavLink
        to="/fraud"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        {t.fraudMonitor}
      </NavLink>

      <NavLink
        to="/loan-regulations"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        {t.loanRegulations}
      </NavLink>

      <NavLink
        to="/government-schemes"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        {t.governmentSchemes}
      </NavLink>

    </div>
  );
}

export default Sidebar;