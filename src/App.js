import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData} />} />
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
        </div>
      </BrowserRouter>
    )
  }
export default App;