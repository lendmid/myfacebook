import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Route path='/messages' render={() => <Messages store={props.store} />} />
                <Route path='/profile' render={() => <Profile store={props.store} />} />
            </div>
        </BrowserRouter>
    )
}
export default App;