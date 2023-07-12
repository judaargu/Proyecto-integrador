import React, {useState} from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import Style from "./styles/Card.module.css"
import { connect } from "react-redux";


function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {

      if(isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }

   }

   const onCloseAndFav = () => {
      setIsFav(false);
      props.removeFav(props.id);
      return props.onClose(props.id);
   }
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
         <div  className={Style.card}>
            <NavLink to={`/detail/${props.id}`} className={Style.cardNavlink}><h5  >{props.name}</h5></NavLink>
            <img src={props.image}  alt={props.name} className={Style.imgCard}></img>
            <div  className={Style.body}>
               <p >{props.species}</p>
               <p >{props.gender}</p>
               <p >{props.status}</p>
               <p >{props.origin}</p>
               <button className={Style.buttonCard} 
               onClick={onCloseAndFav}>X</button>
               {
                  isFav ? (
                     <button onClick={handleFavorite} className={Style.buttonFav}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite} className={Style.buttonFav}>🤍</button>
                  )
               }
            </div>
         </div>
   );
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)