import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import LoanBias from "./components/LoanBias";
import FraudMonitor from "./components/FraudMonitor";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
