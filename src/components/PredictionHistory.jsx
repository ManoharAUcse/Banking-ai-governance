import { useEffect, useState } from "react";
import axios from "axios";

function PredictionHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/risk-predictions")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginLeft: "240px", padding: "40px" }}>
      <h2>Prediction History</h2>

      {data.length === 0 ? (
        <p>No predictions yet</p>
      ) : (
        <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Income</th>
              <th>Credit Score</th>
              <th>Risk</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.income}</td>
                <td>{item.credit_score}</td>
                <td>{item.risk}</td>
                <td>
                  {new Date(item.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PredictionHistory;
