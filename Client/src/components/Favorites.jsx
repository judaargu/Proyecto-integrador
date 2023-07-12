// import { connect } from "react-redux"
import Card from "./Card";
import { filterCards, orderCards } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Styled from './styles/Cards.module.css';
import { useState } from "react";

export default function Favorites (props) {

    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        if (aux){
            setAux(false)
        } else {
            setAux(true)
        }
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return(
    <div>
        <select onChange={handleOrder}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
        </select>
            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        <div className={Styled.principalDiv}>
            {myFavorites.map((character) => {
            return <Card 
                id={character.id}
                key={character.id} 
                name={character.name} 
                status={character.status} 
                species={character.species} 
                gender={character.gender} 
                origin={character.origin} 
                image={character.image} />
            })}
        </div>
    </div>
    )
}

// export const mapState = (state) => {
//     return {
//        myFavorites: state.myFavorites,
//     }
//  }

// export default connect(mapState, {filterCards, orderCards})(Favorites)