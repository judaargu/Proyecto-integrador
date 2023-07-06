import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import Style from "./styles/Nav.module.css"

const Nav = (prop) => {
    return (
        <div className={Style.divNav}>
            <NavLink to='/home'><button className={Style.buttonNav}>Home</button></NavLink>
            <NavLink to='/about'><button className={Style.buttonNav}>About</button></NavLink>
            <NavLink to='/favorites'><button className={Style.buttonNav}>Favorites</button></NavLink>
            <SearchBar onSearch={prop.onSearch} />
        </div>
    )
}

export default Nav;

// (characterID) => window.alert(characterID)