import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Styled from "./styles/SearchBar.module.css"

export default function SearchBar(props) {
   return (
      <div className={Styled.searchDiv}>
         <input type='search'/>
         <button onClick={props.onSearch} className="btn btn-dark" id={Styled.button}>Agregar</button>
      </div>
   );
}
