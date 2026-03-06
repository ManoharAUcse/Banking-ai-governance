function GovernmentSchemes() {

  const schemes = [
    {
      name: "Pradhan Mantri Awas Yojana (PMAY)",
      category: "Housing Loan Subsidy",
      eligibility: "Low & Middle Income Families",
      benefit: "Interest subsidy up to 6.5%",
      link: "https://pmaymis.gov.in/"
    },
    {
      name: "PM Mudra Loan",
      category: "Business Loan",
      eligibility: "Small business owners & entrepreneurs",
      benefit: "Loan up to ₹10 lakh without collateral",
      link: "https://www.mudra.org.in/"
    },
    {
      name: "Stand‑Up India Scheme",
      category: "Startup / Business",
      eligibility: "SC/ST & Women Entrepreneurs",
      benefit: "Loan between ₹10 lakh – ₹1 crore",
      link: "https://www.standupmitra.in/"
    },
    {
      name: "Kisan Credit Card (KCC)",
      category: "Agricultural Loan",
      eligibility: "Farmers & agricultural workers",
      benefit: "Low interest crop loans",
      link: "https://pmkisan.gov.in/"
    },
    {
      name: "Education Loan Subsidy Scheme",
      category: "Education Loan",
      eligibility: "Students from economically weaker sections",
      benefit: "Interest subsidy during study period",
      link: "https://www.vidyalakshmi.co.in/"
    }
  ];

  const bankSchemes = [
    {
      bank: "SBI",
      scheme: "SBI Shaurya Home Loan",
      target: "Defense Personnel",
      benefit: "Lower interest rate"
    },
    {
      bank: "HDFC",
      scheme: "HDFC Reach Home Loan",
      target: "Low income families",
      benefit: "Affordable housing loan"
    },
    {
      bank: "ICICI",
      scheme: "ICICI Education Loan",
      target: "Students",
      benefit: "Flexible repayment"
    },
    {
      bank: "Axis",
      scheme: "Axis Bank Women Loan",
      target: "Women Entrepreneurs",
      benefit: "Special interest rate"
    }
  ];

  return (
    <div style={containerStyle}>

      <h1 style={{marginBottom:"30px"}}>
        Government & Bank Loan Schemes
      </h1>

      {/* Government Schemes */}

      <div style={cardStyle}>
        <h3>Government Loan Schemes</h3>

        {schemes.map((scheme,index)=>(
          <div key={index} style={{marginBottom:"20px"}}>
            <h4>{scheme.name}</h4>
            <p><b>Category:</b> {scheme.category}</p>
            <p><b>Eligibility:</b> {scheme.eligibility}</p>
            <p><b>Benefit:</b> {scheme.benefit}</p>

            <a
              href={scheme.link}
              target="_blank"
              rel="noreferrer"
              style={{color:"#60a5fa"}}
            >
              View Official Scheme →
            </a>

            <hr style={{borderColor:"#334155"}} />
          </div>
        ))}

      </div>

      {/* Bank Special Schemes */}

      <div style={cardStyle}>
        <h3>Bank Special Loan Schemes</h3>

        <table style={{width:"100%", borderCollapse:"collapse"}}>

          <thead>
            <tr style={{background:"#0f172a"}}>
              <th style={th}>Bank</th>
              <th style={th}>Scheme</th>
              <th style={th}>Target Group</th>
              <th style={th}>Benefit</th>
            </tr>
          </thead>

          <tbody>
            {bankSchemes.map((item,index)=>(
              <tr key={index} style={{borderBottom:"1px solid #334155"}}>
                <td style={td}>{item.bank}</td>
                <td style={td}>{item.scheme}</td>
                <td style={td}>{item.target}</td>
                <td style={td}>{item.benefit}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

/* same UI layout as dashboard */

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

export default GovernmentSchemes;