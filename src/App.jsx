import React,{ useState,useRef } from 'react'
import './styles/App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import {Welcome} from './Components/WelcomeLayer'

import Home from './pages/Home';
import Utility from './pages/Utility';
import AboutUs from './pages/AboutUs';
import BuyBack from './pages/BuyBack';
import MassonsClub from './pages/MassonsClub';



export default function App() {
 
  
 
  return (
    <>
      
        
        <Router>
           
            <Routes>
                <Route exact path='/'  element={<Home  />} />
                <Route path='/Utility' element={<Utility />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/BuyBack' element={<BuyBack />} />
                <Route path='/MassonsClub' element={<MassonsClub />} />
            </Routes>
        </Router>
 
  
    </>
  )
}


