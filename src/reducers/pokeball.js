import { POKEBALL_ADD, POKEBALL_REMOVE } from "../actions/pokeball";
import { getPokemons } from './pokemons'

export default function pokeball(state = [], action) {
    switch (action.type) {
        case POKEBALL_ADD:
            return [
                ...new Set(
                    state.concat(action.payload)
                )
            ];
        case POKEBALL_REMOVE:
            return state.filter(item => item !== action.payload);
        default:
            return state;
    }
}

export function getPokeball(state) {
    return state.pokeball;
}

export function getPokeballPokemons(state) {
    return getPokemons(state, getPokeball(state));
}