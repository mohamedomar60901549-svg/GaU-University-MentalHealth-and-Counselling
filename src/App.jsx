import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import StudentDashboard from "./pages/StudentDashboard";
import CounsellorDashboard from "./pages/CounsellorDashboard";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}>
        
        <Navbar />

        {/* MAIN CONTENT */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/counsellor" element={<CounsellorDashboard />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add these routes to fix the errors */}
            <Route path="/privacy" element={<div style={{ padding: "120px 24px", textAlign: "center" }}><h1>Privacy Policy</h1><p>Coming soon...</p></div>} />
            <Route path="/terms" element={<div style={{ padding: "120px 24px", textAlign: "center" }}><h1>Terms of Service</h1><p>Coming soon...</p></div>} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}