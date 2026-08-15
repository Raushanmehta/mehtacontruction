
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import TopBar from './components/navbar/TopBar'
// import ConsultationPopup from './page/home/enqury-form/ConsultationPopup'
import EnquirySection from './page/home/enqury-form/EnquirySection'
import Home from './page/home/Home'


function App() {
 
  return (
    <>
    <TopBar />
    <Navbar />
    <Home/>
    <EnquirySection />

    <Footer/>
    </>
     
  )
}

export default App
