import { useState } from 'react'
import '../styles/Main.scss'

import image from '../assets/club.jpg'
let text = 'We are well aware of the importance of the good mood of our holders and want to create a separate place exclusively for Masson holders. This place will be a DAO with alpha callers and collab managers that we will hire specifically for its fullness and pleasant atmosphere. Also, our DAO will have its own budget with a % of royalties. It will be 1% of all royalty income. This amount will go exclusively to the needs of the DAO and dispose of a large number of votes among the holders.'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Main from '../Components/Main'

export default function MassonsClub() {

  
  return (
    <>
      <Header />
      
      <Main image={image} text={[text]} replace={'replace odd'}/>

      <Footer/>

 
    </>
  )
}

 
