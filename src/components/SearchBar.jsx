import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { useState } from 'react';
import Styled from "./styles/SearchBar.module.css"

export default function SearchBar(prop) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={Styled.searchDiv}>
         <input type='search' placeholder='Search a character...' onChange={handleChange} value={id}/>
         <button onClick={() => {prop.onSearch(id)}} className={Styled.searchButton}>Add</button>
      </div>
   );
}
