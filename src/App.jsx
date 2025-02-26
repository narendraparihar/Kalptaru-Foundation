import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome


// import AdminPanel from "./admin/AdminPanel";
// import AdminDashboard from "./admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        {/* <Route path="/admin/panel" element={<AdminPanel />} /> */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
