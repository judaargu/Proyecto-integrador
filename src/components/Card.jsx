import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Style from "./styles/Card.module.css"

export default function Card(props) {
   return (
      // <div>
      //    <img src={props.image} alt={props.name} /> 
      //    <h2>{props.name}</h2>
      //    
      // </div>
         <div className="card" id={Style.card}>
            <img src={props.image} className="card-img-top" alt={props.name}></img>
            <div className="card-body" id={Style.body}>
               <h5 className="card-title" >{props.name}</h5>
               <p className="card-text">{props.species}</p>
               <p className="card-text">{props.gender}</p>
               <p className="card-text">{props.status}</p>
               <p className="card-text">{props.origin}</p>
               <button className="btn btn-outline-secondary" onClick={props.onClose}>X</button>
            </div>
         </div>
   );
}
