import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import API from './api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware.withExtraArgument({
        api: new API
      }))
    )
  )
}