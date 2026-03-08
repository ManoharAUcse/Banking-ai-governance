import { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

function RiskAnalytics(){

const [stats,setStats] = useState(null);

useEffect(()=>{

axios.get("http://localhost:5000/api/analytics")
.then(res=>setStats(res.data))
.catch(err=>console.log(err))

},[])

if(!stats) return <p>Loading analytics...</p>

const data = {
labels:["High Risk","Medium Risk","Low Risk"],
datasets:[
{
label:"Loan Risk Distribution",
data:[stats.high,stats.medium,stats.low],
backgroundColor:["#ef4444","#f59e0b","#22c55e"]
}
]
}

return(

<div style={{marginTop:"40px"}}>

<h2>Loan Risk Analytics</h2>

<Bar data={data}/>

</div>

)

}

export default RiskAnalytics