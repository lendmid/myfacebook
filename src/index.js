import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
// import { rerenderEntireTree } from './render';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<React.StrictMode><App state={state} addPost={addPost} /></React.StrictMode>,
//   document.getElementById('root'));

// rerenderEntireTree(state);
// serviceWorker.unregister();

let rerenderEntireTree = (state) => {
  ReactDOM.render(<React.StrictMode><App state={ state } addPost={store.addPost.bind(store)} /></React.StrictMode>,
    document.getElementById('root'));
}
// serviceWorker.unregister();

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
