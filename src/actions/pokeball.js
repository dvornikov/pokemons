export const POKEBALL_ADD = 'POKEBALL_ADD';
export const POKEBALL_REMOVE = 'POKEBALL_REMOVE';

export function addPokemon(pokemon) {
    return {
        type: POKEBALL_ADD,
        payload: pokemon
    };
}

export function removePokemon(pokemon) {
    return {
        type: POKEBALL_REMOVE,
        payload: pokemon
    }
}