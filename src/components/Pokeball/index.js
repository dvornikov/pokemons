import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux'
import { getPokeball, getPokeballPokemons } from '../../reducers/pokeball'
import { fetchPokemons } from '../../actions/pokemons'
import Pokemon from "../Pokemon"
import { List } from 'antd';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export const Pokeball = ({names, items, fetchPokemons}) => {
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
                    <Link to={ROUTES.POKEMON.replace(':name', pokemon.name)}><Pokemon {...pokemon} /></Link>
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
        fetchPokemons: (pokemon) => dispatch(fetchPokemons(pokemon))
    })
)(Pokeball);