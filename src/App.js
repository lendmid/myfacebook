import React from 'react';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import Preloader from "./components/common/Preloader/Preloader";
import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {getAuthUserData, signOut} from "./redux/authReducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {requestProfile, requestStatus, updateStatus} from "./redux/profileReducer";
// import App from './App';
import store from './redux/redux-store';
// import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";


class App extends React.Component {
    
    componentDidMount() {
        this.props.initializeApp();
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authorizedUserId;
        if (!userId) userId = 11132;

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    
    render() {
        if (!this.props.initialized) return <Preloader />
        
        return (
            <div className="app-wrapper">
                <Header store={this.props.store} />
                <Route exact path='/messages' render={() => <Messages store={this.props.store} />} />
                <Route exact path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store} />} />
                <Route exact path='/users' render={() => <UsersContainer store={this.props.store} />} />
                <Route exact path='/' render={() => <SignInContainer store={this.props.store} />} />
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
})

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, signOut, getProfile: requestProfile, getStatus: requestStatus, updateStatus, getAuthUserData}),
    // withAuthRedirect, // incorrectly checks authorization and done Redirect
)(App)

const MyFacebook = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer store={store} />
            </Provider>
        </BrowserRouter>
    )
}


export default MyFacebook;