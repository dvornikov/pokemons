import { getOne } from '../reducers/pokemons'

export const POKEMONS_NAMES_FETCH = 'POKEMONS_NAMES_FETCH';
export const POKEMONS_NAMES_COMPLETE = 'POKEMONS_NAMES_COMPLETE';
export const POKEMONS_NAMES_FAIL = 'POKEMONS_NAMES_FAIL';

export const POKEMONS_ONE_FETCH = 'POKEMONS_ONE_FETCH';
export const POKEMONS_ONE_COMPLETE = 'POKEMONS_ONE_COMPLETE';
export const POKEMONS_ONE_FAIL = 'POKEMONS_ONE_FAIL';

export function fetchNames() {
    return (dispatch, getState, {api}) =>  {
        dispatch({
            type: POKEMONS_NAMES_FETCH
        });

        api.fetchNames()
        .then(response => {
            dispatch({
                type: POKEMONS_NAMES_COMPLETE,
                payload: response
            })
        },
        error => {
            dispatch({
                type: POKEMONS_NAMES_FAIL
            })
        })
    }
}

export function fetchPokemons(pokemons) {
    return dispatch => {
        for (let index = 0; index < pokemons.length; index++) {
            dispatch(fetchPokemonIfNeeded(pokemons[index]));
        }
    }
}

export function fetchPokemonIfNeeded(pokemon) {
    return (dispatch, getState, {api}) => {
        const state = getState();
        
        if (!getOne(state, pokemon)) {
            dispatch({
                type: POKEMONS_ONE_FETCH
            });
            api.fetchOne(pokemon)
            .then(response => {
                    dispatch({
                        type: POKEMONS_ONE_COMPLETE,
                        payload: response
                    })
                },
                error => {
                    dispatch({
                        type: POKEMONS_ONE_FAIL
                    })
                }
            );
        }
    }
}