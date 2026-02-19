function AuditLogs() {
  const logs = JSON.parse(localStorage.getItem("auditLogs")) || [];

  return (
    <div
      style={{
        marginLeft: "240px",
        padding: "40px",
        background: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      <h2>Audit Logs</h2>

      {logs.length === 0 ? (
        <p>No logs available</p>
      ) : (
        <ul>
          {logs.map((log, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {log}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AuditLogs;
