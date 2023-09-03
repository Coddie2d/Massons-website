import React,{useState, useEffect, useRef } from "react";
import { NavLink as Link } from "react-router-dom";
import '../styles/Header.scss';
import '../styles/index.scss';
import BurgerMenu from './BurgerMenu';

export default function Header(){
   

    return (
        
            <header  className={`header `}>
                <div className="header__nav">
                    <div className="nav__logo ">
                        <a className="logo link" href="/">Massons</a>
                    </div>
                    <BurgerMenu />
                </div>

            
        
       
        </header>

                
 
    )
}