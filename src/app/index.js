import {render} from "react-dom";
import React from 'react';

import store from './store.js'
import {Provider} from 'react-redux'

import App from './containers/app.js';


// const myLogger = (store) => (next) => (action) =>
// {
//     console.log("loged action: ", action);
//     next(action); //MEANS THAt ACTION is suppose to happen is executed AND IS NECESSARY
// };

// store.subscribe(() => {
//     //console.log("store updated", store.getState());
// });

// store.dispatch({
//     type: "ADD",
//     payload: 100
// });


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById('app'));
