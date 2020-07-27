import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode><App store={store} /></React.StrictMode>,
        document.getElementById('root'));
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});
