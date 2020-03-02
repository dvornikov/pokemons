import React from 'react';
import { connect } from 'react-redux'
import { Result } from 'antd';
import { withRouter } from "react-router-dom";
import { getOne } from '../../reducers/pokemons'
import { List, Typography } from 'antd';

const Page = ({pokemon}) => {
    const { sprites: { front_default: cover = '' }} = pokemon;

    return (
        <div style={{background: '#fff'}}>
            <Result
                title={pokemon.name}
                icon={cover && <img alt={pokemon.name} src={cover} />}
                extra={<div>
                    <h3>Some information about pokemon.</h3>
                    <List
                    size="small"
                        header={<div>Abilities</div>}
                        bordered
                        dataSource={pokemon.abilities}
                        renderItem={({ability}) => <List.Item>{ability.name}</List.Item>}
                    />
                </div>}
            />
        </div>
    );
};

export default withRouter(connect(
    (state, ownProps) => ({
        pokemon: getOne(state, ownProps.match.params.name)
    })
)(Page));