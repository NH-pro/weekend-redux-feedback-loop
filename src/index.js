import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux Stuff
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
