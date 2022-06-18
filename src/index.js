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
            return action.payload;
        case 'RESET_STATE':
            return state = 0;
    }
    return state;
}

const understandingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_UNDER':
            return action.payload;
        case 'RESET_STATE':
            return state = 0;
    }
    return state;
}

const supportReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        case 'RESET_STATE':
            return state = 0;
    }
    return state;
}

const commentsReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        case 'RESET_STATE':
            return state = '';
    }
    return state;
}

// Store
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
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
