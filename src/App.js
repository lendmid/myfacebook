import React from 'react';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import UsersContainer from "./components/Users/UsersContainer";
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import SignInContainer from "./components/SignIn/SignInContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header store={props.store}/>
            <Route path='/messages' render={() => <Messages store={props.store} />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />} />
            <Route path='/users' render={() => <UsersContainer store={props.store} />} />
            <Route path='/signIn' render={() => <SignInContainer store={props.store} />} />
        </div>
    )
}

export default withRouter(App);
