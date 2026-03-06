import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import LoanBias from "./components/LoanBias";
import FraudMonitor from "./components/FraudMonitor";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import LoanRegulations from "./components/LoanRegulations";
import GovernmentSchemes from "./components/GovernmentSchemes";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <>
                <Navbar />
                <Sidebar />
                <Dashboard />
              </>
            </ProtectedRoute>
          }
        />

        {/* Loan Bias */}
        <Route
          path="/loan-bias"
          element={
            <ProtectedRoute allowedRoles={["admin", "auditor"]}>
              <>
                <Navbar />
                <Sidebar />
                <LoanBias />
              </>
            </ProtectedRoute>
          }
        />

        {/* Fraud Monitor */}
        <Route
          path="/fraud"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <>
                <Navbar />
                <Sidebar />
                <FraudMonitor />
              </>
            </ProtectedRoute>
          }
        />
        
<Route
  path="/loan-regulations"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <>
        <Navbar />
        <Sidebar />
        <LoanRegulations />
      </>
    </ProtectedRoute>
  }
/>

<Route
  path="/government-schemes"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <>
        <Navbar />
        <Sidebar />
        <GovernmentSchemes />
      </>
    </ProtectedRoute>
  }
/>

        {/* Unknown Route */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;