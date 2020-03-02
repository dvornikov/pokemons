import { combineReducers } from 'redux'
import pokeball from "./pokeball"
import pokemons from "./pokemons"

const rootReducer = combineReducers({
    pokeball,
    pokemons
})

export default rootReducer