import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./components/Dashboard";
import LoanBias from "./components/LoanBias";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import LoanRegulations from "./components/LoanRegulations";
import GovernmentSchemes from "./components/GovernmentSchemes";
import PolicyAnalyzer from "./components/PolicyAnalyzer";
import FraudMonitor from "./components/FraudMonitor";
import Footer from "./components/Footer";

// ✅ NEW IMPORT
import MainLayout from "./layouts/MainLayout";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <BrowserRouter>

      {/* Language Switch */}
      <div style={{ padding: "10px", textAlign: "right" }}>
        <button onClick={() => setLanguage("en")}>
          English
        </button>

        <button
          onClick={() => setLanguage("te")}
          style={{ marginLeft: "10px" }}
        >
          తెలుగు
        </button>
      </div>

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login language={language} />} />

        {/* ✅ COMMON LAYOUT (NO REPEAT) */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["admin","auditor"]}>
              <MainLayout language={language} />
            </ProtectedRoute>
          }
        >

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/loan-bias" element={<LoanBias language={language} />} />

          <Route path="/fraud" element={<FraudMonitor />} />

          <Route
            path="/loan-regulations"
            element={<LoanRegulations language={language} />}
          />

          <Route
            path="/government-schemes"
            element={<GovernmentSchemes language={language} />}
          />

          <Route
            path="/policy-analyzer"
            element={<PolicyAnalyzer language={language} />}
          />

        </Route>

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;