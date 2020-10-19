import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyFacebook from './App';
import * as serviceWorker from "./serviceWorker"


ReactDOM.render(<MyFacebook />, document.getElementById('root'));

serviceWorker.register();
