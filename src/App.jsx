import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./sections/Home";
import AboutPage from "./page/about/AboutPage";
import ContactPage from "./page/contact/ContactPage";
import TopBar from "./components/layout/navbar/TopBar";

export default function App() {
  return (
    <>
    <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}
