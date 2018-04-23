import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import mathReducer from './reducer/mathReducer.js';
import userReducer from './reducer/userReducer.js'

export default createStore(combineReducers({
        math: mathReducer,
        user: userReducer
    }),
    {},
    applyMiddleware(logger, thunk, promise()));
