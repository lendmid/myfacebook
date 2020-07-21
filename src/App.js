import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Route path='/messages' render={() => <Messages messagesPage={props.state.messagesPage} dispatch={props.dispatch} />} />
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
        </div>
      </BrowserRouter>
    )
  }
export default App;