import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux Imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const feelingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload
    }
    return state;
}

// Store
const storeInstance = createStore(
    combineReducers({
        feelingReducer
    }),
    applyMiddleware(logger)
);

// Render
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
    registerServiceWorker();
