import React, { useState } from 'react';
import { connect } from 'react-redux'
import { AutoComplete } from 'antd';
import { getNames } from '../../reducers/pokemons'
import { addPokemon } from '../../actions/pokeball'

export const Search = ({items, onSelect}) => {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');

    const handleSearch = searchText => {
        const filteredItems = items.filter(({name}) => name.indexOf(searchText.toLowerCase()) !== -1);

        setOptions(
            searchText
            ? filteredItems.map(({name}) => name)
            : []
        );

        setValue(searchText);
    };

    const handleSelect = value => {
        onSelect(value);
        setValue('');
    };
    
    const children = options.map(value => (
        <AutoComplete.Option key={value} value={value}>
            {value}
        </AutoComplete.Option>
    ));

    return (
        <AutoComplete
            onSearch={handleSearch}
            onSelect={handleSelect}
            options={options}
            placeholder="Input pokémon name"
            value={value}
            allowClear
        >
            {children}
        </AutoComplete>
    );
}
export default connect(
    state => ({
        items: getNames(state)
    }),
    dispatch => ({
        onSelect: item => dispatch(addPokemon(item)),
    })
)(Search);