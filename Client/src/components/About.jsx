import React from "react";
import Style from "./styles/detail.module.css"

export default function About () {
    
    return (
        <div className={Style.body}>
            <div className={Style.name}>
                <label>NAME: </label>
                <span>Juan David Ardila Gutiérrez</span>
                <div className={Style.music}>
                </div>
            </div>
            <img src='/src/components/images/Yo_rick_and_morty-1.png' alt='Juan Ardila'></img>
            <div>
                <ul className={Style.details}>
                    <li>
                    <label>STATUS: <span>Alive</span></label>
                    </li>
                    <li>
                    <label>GENDER: <span>Male</span></label>
                    </li>
                    <li>
                    <label>SPECIE: <span>Human</span></label>
                    </li>
                    <li>
                    <label>ORIGIN: <span>Real earth (app creator)</span></label>
                    </li>
                </ul>
            </div>
        </div>
        // <div >
        //     <img src='/src/components/images/Yo_rick_and_morty-1.png' 
        //     alt='Juan Ardila' width='500px'/>
        // </div>
    )
}