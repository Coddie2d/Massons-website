import React,{ useState } from 'react'
import '../styles/Home.scss';

let video  = "src/assets/forHome.mp4";

import HeaderHome from '../Components/HeaderHome'
import Footer from '../Components/Footer'
import Main from '../Components/Main';

export default function Home() {


  return (
    <>
    <HeaderHome forBurger={'withoutPadding'}/>

    <video src={video}  autoPlay loop muted type="video/mp4" className='homeVideo' ></video>
    </>
  )
}

 
