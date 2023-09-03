import React from "react";
import '../styles/Main.scss'

export default function MainForAll(props){
    return (
        <main className={`${props.replace ? props.replace : '' } main container `}>
            <img src={props.image} class="img-fluid img" alt=""/>
            <div className="text__container">
                <p className="plain_text">{props.text[0]}</p>
                
            </div>

        </main>
    ) 
}