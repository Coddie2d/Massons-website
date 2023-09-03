import { useState } from 'react'
import image from '../assets/about.jpg'
import '../styles/Main.scss'
let text = 'Our goal Is not to destroy the world, but to make it a better place. All our existence we have been striving for something great and truly noble. We want to make the ability to own blue chip NFT collections on Solana more affordable and allow everyone to own them. This is exactly the goal of Masson. Our project gives people to make investing in large projects more affordable and pool investor funds for more profits and less risk. Being a Massons holder means participating in the Investment Fund with your system and being part of it. Investing in the NFT world on Solana is quite risky for small investors or enthusiasts with a limited budget and we want to fix that.'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Main from '../Components/Main'


export default function AboutUs() {

  
  return (
    <>
      <Header />
      
      <Main image={image} text={[text]} replace={'replace odd'}/>

      <Footer/>
 
    </>
  )
}

 
