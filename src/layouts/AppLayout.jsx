function AppLayout({ children }) {
  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      padding: "clamp(10px, 3vw, 30px)",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      background: "linear-gradient(135deg,#020617,#0f172a,#020617)",
      color: "white"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "1200px"
      }}>
        {children}
      </div>
    </div>
  );
}

export default AppLayout;