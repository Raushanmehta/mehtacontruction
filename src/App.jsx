import "./App.css";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import TopBar from "./components/layout/navbar/TopBar";
import EnquirySection from "./sections/EnquirySection";
import Home from "./sections/Home";


function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Home />
      <EnquirySection />
      <Footer />
    </>
  );
}

export default App;
