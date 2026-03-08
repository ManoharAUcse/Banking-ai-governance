import { NavLink } from "react-router-dom";

function Sidebar() {
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
        Dashboard
      </NavLink>

      <NavLink
        to="/loan-bias"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Loan Bias
      </NavLink>

      <NavLink
        to="/fraud"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Fraud Monitor
      </NavLink>

      {/* Loan Regulations Page */}

      <NavLink
        to="/loan-regulations"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Loan Regulations
      </NavLink>
     
     {/*Schemes */}
      <NavLink
  to="/government-schemes"
  style={({ isActive }) =>
    isActive ? { ...linkStyle, ...activeStyle } : linkStyle
  }
>
  Government Schemes
</NavLink>

    </div>
  );
}

export default Sidebar;