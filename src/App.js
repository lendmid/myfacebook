import React from 'react';
import Header from './components/Header/Header';
import ProfileContainer from "./components/Profile/ProfileContainer";
import LogInConrainer from "./components/LogIn/LogInContainer";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import Messages from './components/Messages/Messages';

import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {getAuthUserData, logOut} from "./redux/authReducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {getProfile, getStatus, updateStatus} from "./redux/profileReducer";
import store from './redux/redux-store';
import {getTotalUsersCount} from "./redux/usersSelectors";


class App extends React.PureComponent {
    componentDidMount() {
        this.props.initializeApp();
        this.props.getAuthUserData();
    }
    
    rendereWithNotAuth() {
        return (
            <Switch>
                <Route exact path='/login' component={LogInConrainer} />
                <Redirect to={'/login'} />
            </Switch>
        )
    }
    
    renderWithAuth(authorizedUserId) {
        return (
            <>
            <Header />
            <Switch>
                <Route exact path='/login' component={LogInConrainer} />
                <Route exact path="/profile/:userId" component={ProfileContainer} />
                <Route exact path="/messages/:userId" component={Messages} />
                <Route exact path='/users' component={UsersContainer} />
                <Redirect to={`/profile/${authorizedUserId}`} />
            </Switch>
        </>
        )
    }
    
    render() {
        if (!this.props.initialized) return <Preloader />
        
        return (
            <div className="app-wrapper">
                {this.props.isAuth ? this.renderWithAuth(this.props.authorizedUserId) : this.rendereWithNotAuth()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.authorizedUserId,
    initialized: state.app.initialized,
    totalUsersCount: getTotalUsersCount(state),
})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp, logOut, getProfile, getStatus, updateStatus, getAuthUserData}),
    // withRouter,
)(App)

const MyFacebook = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default MyFacebook;
