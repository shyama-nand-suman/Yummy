
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Delivery from './Component/Delivery'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Hero from './Component/Hero'
import OurFood from './Component/OurFood'
import TopPicks from './Component/TopPicks'
import Home from './Component/Home'
import AboutUs from './Component/AboutUs'
import SingIn from './Component/SingIn'
function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/ourfood' element={<OurFood/>}/>
      <Route path="/singin" element={<SingIn/>}/>
      
   
    
  
   

    </Routes>
    <Footer/>
    </BrowserRouter> 
    </>
  );
}

export default App
