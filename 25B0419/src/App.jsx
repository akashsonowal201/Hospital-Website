import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/departments" element={<Departments />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/appointment" element={<Appointment />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </>
   
  );
}

export default App;