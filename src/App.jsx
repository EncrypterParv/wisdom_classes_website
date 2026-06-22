import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Class11 from "./pages/Class11";
import Class12 from "./pages/Class12";
import JEE from "./pages/JEE";
import NDA from "./pages/NDA";
import IPMAT from "./pages/IPMAT";
import Contact from "./pages/Contact";
import FreeResources from "./pages/FreeResources";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cream">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class-11" element={<Class11 />} />
            <Route path="/class-12" element={<Class12 />} />
            <Route path="/jee" element={<JEE />} />
            <Route path="/nda" element={<NDA />} />
            <Route path="/ipmat" element={<IPMAT />} />
            <Route path="/free-resources" element={<FreeResources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
