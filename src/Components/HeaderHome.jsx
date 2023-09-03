import React,{ useEffect, useRef } from "react";
import sound from '../assets/theme1.mp3';
import '../styles/HeaderHome.scss';

import BurgerMenu from './BurgerMenu'

export default function HeaderHome(props){
    
    const [audioState, setAudioState] = React.useState(true)
    const [buttonPressed, setButtonPressed] = React.useState(localStorage.getItem('isWelcomeButtonPressed') ? localStorage.getItem('isWelcomeButtonPressed') : false)
    

    function sOn(){
        setAudioState(!audioState)
        playSound()
    }
    function sOff(){
        setAudioState(!audioState)
        stopSound()
    }
    const videoRef = useRef(null);

    const playSound = () => {
      videoRef.current.play();
    };
  
    const stopSound = () => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    };

    useEffect(() => {
        window.onbeforeunload = function() {
            localStorage.clear()
        };
    
        return () => {
            window.onbeforeunload = null;
        };
    }, []);
 

    return (
        <div className="" >
            <header className="header ">
                <div className="header__nav container">
                    <div className="nav__logo ">
                        <a className="logo link" href="/">Massons</a>
                    </div>
                    <BurgerMenu props={props.forBurger}/>
                    <div className="nav__sound link">
                        {audioState ?  <i className="fa-solid fa-volume-high" onClick={() => sOff()} ></i> : <i className="fa-solid fa-volume-xmark" onClick={() => sOn()}  ></i> }
                        {audioState ? 'Sound: On' : 'Sound: Off'}
                    </div>
                </div>
            <div>
                <video
                    ref={videoRef}
                    controls
                    src={sound}
                    type="video/ogg"
                    loop
                    hidden
                />
      
            </div>
        
            
        
                
        </header>
        
        { !buttonPressed && <div className='welcome'>
                <h1 className="welcomeTitle">Welcome Degen, press the button to enter the Tomb</h1>
                <button className="welcomeBtn" onClick={function(){
                    setButtonPressed(!buttonPressed)

                    playSound()
                    localStorage.setItem("isWelcomeButtonPressed", !buttonPressed);
                }}>Enter The Tomb </button>
            </div>    
        }    
                
    </div>
    )
}