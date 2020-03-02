import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux'
import { getPokeball, getPokeballPokemons } from '../../reducers/pokeball'
import { fetchPokemons } from '../../actions/pokemons'
import { removePokemon } from '../../actions/pokeball'
import Pokemon from "../Pokemon"
import { List } from 'antd';

export const Pokeball = ({names, items, fetchPokemons, removeFromPokeball}) => {
    useEffect(() => {
        fetchPokemons(names);
    }, [names]);

    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
            }}
            dataSource={items}
            renderItem={pokemon => (
                <List.Item>
                    <Pokemon {...pokemon} onDelete={removeFromPokeball} />
                </List.Item>
            )}
        />
    );
};

export default connect(
    state => ({
        items: getPokeballPokemons(state),
        names: getPokeball(state)
    }),
    dispatch => ({
        fetchPokemons: (pokemon) => dispatch(fetchPokemons(pokemon)),
        removeFromPokeball: (pokemon) => dispatch(removePokemon(pokemon))
    })
)(Pokeball);