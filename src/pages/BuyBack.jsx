import { useState } from 'react'
import image from '../assets/buyback.jpg'
import '../styles/Main.scss'
let text = "Chances are, you've often encountered a situation where the floor of a collection starts to fall irrevocably, paper hands start to leave the project, and everything falls flat. We found a solution to this problem and decided to implement a \"Buy Back\" feature. This will help us keep the price higher than the mint and keep holders in the mood. Funds will be allocated as a % of the royalty. Usually 1% is allocated, which will be used to maintain our floor. All of the NFT generated in this way will later be distributed to the holders, and a portion will go to collabs and marketing."

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Main from '../Components/Main'

export default function BuyBack() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Header />
      
      <Main image={image} text={[text]} replace={'even'} />

      <Footer/>
  
 
    </>
  )
}

 
