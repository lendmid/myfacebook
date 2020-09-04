import React from 'react';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import UsersContainer from "./components/Users/UsersContainer";
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import {signOut} from "./redux/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    
    componentDidMount() {
        this.props.initializeApp();
        // let userId = this.props.match.params.userId ? this.props.match.params.userId : 11132;
        // let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authorizedUserId;
        // this.props.getProfile(userId);
        // this.props.getStatus(userId);
    }
    
    
    render() {
        debugger
        if (!this.props.initialized) return <Preloader />
        if (!this.props.isAuth) return (
            <Route path='/signIn' render={() => <SignInContainer store={this.props.store} />} />
        )
        
        
        return (
            <div className="app-wrapper">
            <Header store={this.props.store} />
            <Route path='/messages' render={() => <Messages store={this.props.store} />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store} />} />
            <Route path='/users' render={() => <UsersContainer store={this.props.store} />} />
        </div>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
})

export default compose(
    connect(mapStateToProps, {initializeApp, signOut}),
    withRouter,
    // withAuthRedirect,
)(App)
