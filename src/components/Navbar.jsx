function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px 30px",
        fontSize: "20px",
        fontWeight: "bold",
        marginLeft: "220px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <span>🏦 Banking AI Governance Dashboard</span>

      <button
        onClick={handleLogout}
        style={{
          padding: "6px 12px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
