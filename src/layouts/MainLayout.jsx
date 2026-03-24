import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";
import { Outlet } from "react-router-dom";

function MainLayout({ language }) {
  return (
    <>
      <Navbar language={language} />

      <div style={{
        display: "flex",
        width: "100%"
      }}>
        
        {/* Sidebar */}
        <Sidebar language={language} />

        {/* Main Content */}
        <div
          style={{
            flex: 1, // ✅ takes remaining space
            padding: "clamp(10px, 3vw, 30px)",
            boxSizing: "border-box"
          }}
        >
          <Outlet />
        </div>

      </div>

      <Chatbot language={language} />
    </>
  );
}

export default MainLayout;