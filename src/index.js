import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redax/redux-store';
import MyAppComponent from "./App";


let rerenderTree = () =>{
    ReactDOM.render(<MyAppComponent />, document.getElementById('root'));
    }

rerenderTree(store.getState() );

store.subscribe( () => {
    let state = store.getState();
    rerenderTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();