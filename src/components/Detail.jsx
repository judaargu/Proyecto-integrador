import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Style from "./styles/detail.module.css"

export default function Detail () {

    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);
    
    return (
        <div className={Style.body}>
            <div className={Style.name}>
                <label>NOMBRE: </label>
                <span>{character.name && character.name}</span>
            </div>
            <img src={character.image}></img>
            <div>
                <ul className={Style.details}>
                    <li>
                    <label>STATUS: <span>{character.status ? character.status : "Sin status"}</span></label>
                    </li>
                    <li>
                    <label>GENDER: <span>{character.gender && character.gender}</span></label>
                    </li>
                    <li>
                    <label>SPECIE: <span>{character.species && character.species}</span></label>
                    </li>
                    <li>
                    <label>ORIGIN: <span>{character.origin?.name}</span></label>
                    </li>
                </ul>
            </div>
        </div>
    )
}