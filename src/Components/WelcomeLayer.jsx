import React,{useRef} from "react";
import '../styles/welcome.scss'

export function Welcome(){
    const [buttonPressed, setButtonPressed] = React.useState(false)
    const videoRef = useRef(null);

    const playSound = () => {
      videoRef.current.play();
    };
  
    const stopSound = () => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    };
    return(
    <>

        <div className={`welcome ${buttonPressed ? 'entered' : ''}`}>
                <h1>Welcome, Degen press the button to enter the Tomb</h1>
                <button className="welcomeBtn" onClick={function(){
                    setButtonPressed(!buttonPressed);
                    playSound()

                }}>Enter The Tomb </button>
        </div>
    </>

     
    )
}