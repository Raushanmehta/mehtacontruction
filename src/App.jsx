
import './App.css'
import Footer from './components/layout/footer/Footer'
import Navbar from './components/layout/navbar/Navbar'
import TopBar from './components/layout/navbar/TopBar'
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
