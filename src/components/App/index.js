import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import configureStore from '../../configureStore'
import { Layout, PageHeader } from 'antd';
import { fetchNames } from '../../actions/pokemons';
import Search from '../Search'
import Pokeball from '../../pages/Pokeball'
import Pokemon from '../../pages/Pokemon'
import "../../styles.less"
import { loadState, saveState } from '../../localStorage'
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as ROUTES from '../../constants/routes';

const store = configureStore(loadState());
store.subscribe(() => {
    saveState({
        pokeball: store.getState().pokeball
    })
})

const { Content } = Layout;

const App = () => {
    useEffect(() => {
        store.dispatch(fetchNames());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <PageHeader
                        title="Pokéball"
                        extra={[
                            <Search key="search" />
                        ]}
                    />
                    <Content style={{ padding: 24 }}>
                        <Route exact path={ROUTES.POKEBALL} component={Pokeball} />
                        <Route path={ROUTES.POKEMON} component={Pokemon} />
                    </Content>
                </Layout>
            </Router>
        </Provider>
    );
};

export default App;