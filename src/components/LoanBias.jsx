function LoanBias() {
  return (
    <div
      style={{
        marginLeft: "240px",
        padding: "30px",
        background: "#f1f5f9",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h3>Loan Approval Bias Analysis</h3>
        <p>Gender Bias: 8%</p>
        <p>Region Bias: 5%</p>
        <p>Income Bias: 6%</p>
        <p style={{ color: "green", fontWeight: "bold" }}>
          Status: Fair Model
        </p>
      </div>
    </div>
  );
}

export default LoanBias;
