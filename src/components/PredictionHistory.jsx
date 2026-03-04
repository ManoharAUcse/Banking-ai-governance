import { useEffect, useState } from "react";
import axios from "axios";

function PredictionHistory(){

  const [rows,setRows] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:5000/api/predictions")
      .then(res=>setRows(res.data));

  },[]);

  return(

  <div style={{marginLeft:"240px",padding:"40px",color:"white"}}>

  <h1>Loan Decision History</h1>

  <table style={{width:"100%",marginTop:"20px"}}>

  <thead>

  <tr>
  <th>ID</th>
  <th>Income</th>
  <th>Credit Score</th>
  <th>Risk</th>
  <th>Date</th>
  </tr>

  </thead>

  <tbody>

  {rows.map(r=>(
  <tr key={r.id}>
  <td>{r.id}</td>
  <td>{r.income}</td>
  <td>{r.credit_score}</td>
  <td>{r.risk}</td>
  <td>{r.created_at}</td>
  </tr>
  ))}

  </tbody>

  </table>

  </div>

  );

}

export default PredictionHistory;