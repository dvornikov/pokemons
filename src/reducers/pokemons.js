import {
    POKEMONS_NAMES_COMPLETE,
    POKEMONS_ONE_COMPLETE
} from "../actions/pokemons";

export default function pokemons(state = {
    byName: {},
    names: []
}, action) {
    switch (action.type) {
        case POKEMONS_NAMES_COMPLETE:
            return {
                ...state,
                names: action.payload
            }
        case POKEMONS_ONE_COMPLETE:
            return {
                ...state,
                byName: {
                    ...state.byName,
                    [action.payload.name]: action.payload
                }
            }
        default:
            return state;
    }
}

export function getNames(state) {
    return state.pokemons.names;
}

export function getOne(state, pokemon) {
    return state.pokemons.byName[pokemon];
}

export function getPokemons(state, names) {
    return names
    .map(name => getOne(state, name))
    .filter(item => !!item);
}