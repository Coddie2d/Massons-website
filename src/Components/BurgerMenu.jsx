import React, { useState } from 'react';
import '../styles/BurgerMenu.scss';

const BurgerMenu = (props) => {

   const [menu_class, setMenuClass] = useState("nav__links ")
   const [clicked, isClicked] = useState(false)

   const updateMenu = () => {

           isClicked(!clicked)
   
   }
   
   clicked ? document.body.classList.add('scrollBlock') : document.body.classList.remove('scrollBlock')
  return (
    
    <div  className={`bg ${clicked ? 'opened' : ''}`} >
            <nav className={`nav ${props.props}`}>
                <div className={`burger_Menu ${clicked ? 'opened' : ''} `} onClick={updateMenu}>
                    <span className=''></span>
                
                </div>
            </nav>

            <div className={`menu_links ${menu_class}`}>
              <a href="/" className='nav_link link' >Home</a>
              <a href="/Utility" className='nav_link link' >Utility</a>
              <a href="/AboutUs" className='nav_link link' >About us</a>
              <a href="/BuyBack" className='nav_link link' >Buy back</a>
              <a href="/MassonsClub" className='nav_link link' >Massons club</a>
            </div>
        </div>


  );
};

export default BurgerMenu;

