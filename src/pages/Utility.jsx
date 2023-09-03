import React,{ useState } from 'react'
import image from '../assets/utl.jpg'
import '../styles/Main.scss'
let text = "We are giving each of our holders the opportunity to also become a holder of all blue chip collections on Solana. With the funds we receive from the Mint, we are going to buy NFT one copy each of all the blue chip collections on Solana. All possible royalties and utility revenues will be distributed to all of our holders. "
let qqs = "What kind of collection holders are we going to become? ", ans = "If you are a Masson holder, you can rightfully be considered a holder of  Mad Lads, Transdimensional Fox Federation, Claynosaurz, ABC, Solcasino.io, Okay Bears, JellyRascals, SMB Gen2, Degenerate Ape Academy, sharx by sharky.fi, oogy, The Heist, BoDoggos, Smyths, LILY, Taiyo Robotics, Oak Paradise, Alpha Pharaohs, Solcasino Microshares, Fidelion, Elixir: Ovols, Liberty Square: The Sinister Squirrel Syndicate, DeezLite, Gods, Wolf Capital, CETS, Whirltools, Immortals, DUELBOTS, Degen Fat Cats, Thugbirdz, Golem's Souls and The Anon Club. You are also entitled to all sorts of utilities from each of these collections."

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Main from '../Components/Main'


export default function Utility( ) {
  
  
  return (
    <>
      <Header />
     
      <Main image={image} text={[text,qqs,ans]} replace={'even'} />

      <Footer/>

 
    </>
  )
}

 
