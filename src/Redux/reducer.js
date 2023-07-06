import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions" 


const initialState = {
    myFavorites: [],
    allCharacters: [],
}

export default function rootReducer (state=initialState, action) {
    switch (action.type){
        case ADD_FAV:
            // return {
            //     ...state, 
            //     myFavorites: [...state.myFavorites, action.payload],
            // }
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            }
        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: state.myFavorites.filter((char) => char.id !== Number(action.payload)),
                allCharacters: state.allCharacters.filter((char) => char.id !== Number(action.payload)),
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((character) => character.gender === action.payload),
            }
        case ORDER:
            return {
                ... state,
                myFavorites: state.allCharacters.sort((a, b) => {
                    if (action.payload === 'A'){
                        if (a.id > b.id) {
                            return 1;
                        }
                        if (a.id < b.id) {
                            return -1;
                        }
                            return 0;
                    } else {
                        if (a.id > b.id) {
                            return -1;
                        }
                        if (a.id < b.id) {
                            return 1;
                        }
                            return 0;
                    }
                    }),
            }
        default:
            return {...state};
    }
}