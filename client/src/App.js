import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Users from "./components/Users/Users";
import Messages from './components/Messages/Messages';

import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import {getUserData} from "./redux/auth.reducer";
import {connect} from "react-redux";
import {getTotalUsersCount} from "./redux/selectors/usersSelectors";


const App = React.memo(({isAuth, userId, getUserData}) => {

    useEffect(() => {
        getUserData()
    }, [getUserData]);

    let renderWithNotAuth = () => {
        return (
            <Switch>
                <Route exact path='/login' component={LogIn}/>
                <Route exact path='/register' component={Register}/>
                <Redirect to={'/login'}/>
            </Switch>
        )
    };

    let renderWithAuth = (userId) => {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/profile/:userId" component={Profile}/>
                    <Route exact path="/messages/:userId" component={Messages}/>
                    <Route exact path='/users/:userId?' component={Users}/>
                    <Redirect to={`/profile/${userId}`}/>
                </Switch>
            </>
        )
    };

    return (
        <div className="app-wrapper">
            {isAuth ? renderWithAuth(userId) : renderWithNotAuth()}
            <div id="alerts" className="alerts"/>
        </div>
    )
});

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    totalUsersCount: getTotalUsersCount(state),
});

export default connect(mapStateToProps, {getUserData})(App);
