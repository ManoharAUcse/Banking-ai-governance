function LoanRegulations() {

  const securedLoans = [
    "Home Loan – Purchase or construction of residential property",
    "Loan Against Property (LAP) – Using property as collateral",
    "Auto Loan – For purchasing cars or two‑wheelers",
    "Gold Loan – Loan secured by gold ornaments",
    "Loan Against Securities – Shares, mutual funds, bonds",
    "Loan Against Fixed Deposit – Funds against FD value",
    "Commercial Vehicle / Equipment Loan – For business vehicles or machinery"
  ];

  const unsecuredLoans = [
    "Personal Loan – Medical, travel, wedding, or personal expenses",
    "Consumer Durable Loan – Electronics or household appliances",
    "Education Loan – Tuition fees and academic expenses",
    "Business Loan – Working capital or business expansion",
    "Payday Loan – Short‑term emergency loan",
    "Credit Card Loan / Cash Advance – Borrowing against credit card limit"
  ];

  const specialLoans = [
    "Agricultural Loan – For farmers and agricultural activities",
    "Top‑up Loan – Additional amount on an existing loan",
    "Debt Consolidation Loan – Combine multiple debts into one",
    "Bridge Loan – Short‑term financing before long‑term funding"
  ];


  const bankRates = [
  { bank: "SBI", home: "8.4%", personal: "11.2%", vehicle: "9.1%", education: "9.2%", gold: "7.5%" },
  { bank: "HDFC", home: "8.6%", personal: "10.8%", vehicle: "9.3%", education: "9.5%", gold: "7.8%" },
  { bank: "ICICI", home: "8.7%", personal: "11.5%", vehicle: "9.4%", education: "9.7%", gold: "8.0%" },
  { bank: "Axis", home: "8.8%", personal: "12%", vehicle: "9.5%", education: "9.8%", gold: "8.2%" }
];


  return (
    <div style={containerStyle}>

      <h1 style={{marginBottom:"30px"}}>
        Loan Regulations & Banking Policies
      </h1>

      {/* Secured Loans */}

      <div style={cardStyle}>
        <h3>Common Secured Loans (Collateral Based)</h3>

        {securedLoans.map((loan,index)=>(
          <p key={index}>✔ {loan}</p>
        ))}
      </div>

      {/* Unsecured Loans */}

      <div style={cardStyle}>
        <h3>Common Unsecured Loans (No Collateral)</h3>

        {unsecuredLoans.map((loan,index)=>(
          <p key={index}>✔ {loan}</p>
        ))}
      </div>

      {/* Specialized Loans */}

      <div style={cardStyle}>
        <h3>Specialized & Other Loan Types</h3>

        {specialLoans.map((loan,index)=>(
          <p key={index}>✔ {loan}</p>
        ))}
      </div>

      {/* Bank Interest Comparison */}

      <div style={cardStyle}>

        <h3 style={{marginBottom:"15px"}}>
          Bank Interest Rate Comparison
        </h3>

        <table style={{width:"100%", borderCollapse:"collapse"}}>

          <thead>
            <tr style={{background:"#0f172a"}}>
              <th style={th}>Bank</th>
              <th style={th}>Home Loan</th>
              <th style={th}>Personal Loan</th>
              <th style={th}>Vehicle Loan</th>
              <th style={th}>Educational Loan</th>
              <th style={th}>Gold Loan</th>
            </tr>
          </thead>

          <tbody>
            {bankRates.map((bank,index)=>(
              <tr key={index} style={{borderBottom:"1px solid #334155"}}>
                <td style={td}>{bank.bank}</td>
                <td style={td}>{bank.home}</td>
                <td style={td}>{bank.personal}</td>
                <td style={td}>{bank.vehicle}</td>
                <td style={td}>{bank.education}</td>
                <td style={td}>{bank.gold}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

      {/* RBI Lending Rules */}

      <div style={cardStyle}>
        <h3>RBI Lending Guidelines</h3>

        <p>✔ EMI must be less than <b>40% of monthly income</b></p>
        <p>✔ Recommended credit score: <b>650+</b></p>
        <p>✔ Minimum age: <b>21 years</b></p>
        <p>✔ KYC verification mandatory</p>
        <p>✔ Stable employment improves loan approval chances</p>
      </div>

    </div>
  );
}

/* Same layout as dashboard */

const containerStyle = {
  marginLeft: "240px",
  padding: "40px",
  minHeight: "100vh",
  background: "linear-gradient(135deg,#0f172a,#1e293b)",
  color: "white"
};

const cardStyle = {
  background: "rgba(30,41,59,0.6)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "16px",
  marginBottom: "30px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
};

const th = {
  padding: "12px",
  textAlign: "left"
};

const td = {
  padding: "12px"
};

export default LoanRegulations;