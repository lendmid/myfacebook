import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';

let rerenderEntireTree = (state) => {
  ReactDOM.render(<React.StrictMode><App state={ state } dispatch={store.dispatch.bind(store)} /></React.StrictMode>,
    document.getElementById('root'));
}
// serviceWorker.unregister();

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
});
