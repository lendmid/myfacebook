import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Users from "./components/Users/Users";
import Messages from './components/Messages/Messages';

import style from './rootStyles/App.module.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import {getUserData} from "./store/reducers/auth.reducer";
import {connect} from "react-redux";
import {getTotalUsersCount} from "./store/selectors/usersSelectors";
import {AppStateType} from "./store";


interface IProps {
    isAuth: boolean
    userId: string | null
    getUserData(): void
}

const App = React.memo(({isAuth, userId, getUserData}: IProps) => {

    useEffect(getUserData, [getUserData]); // rewrite this code to tokens

    let renderWithNotAuth = () => (
        <Switch>
            <Route exact path='/login' component={LogIn}/>
            <Route exact path='/register' component={Register}/>
            <Redirect to={'/login'}/>
        </Switch>
    )

    let renderWithAuth = (userId: string | null) => (
        <>
            <Header/>
            <Switch>
                <Route exact path="/profile/:userId" component={Profile}/>
                <Route exact path="/messages/:userId" component={Messages}/>
                <Route exact path='/users/:userId?' component={Users}/>
                <Redirect to={`/profile/${userId}`}/>
            </Switch>
        </>)

    return (
        <div className={style.wrapper}>
            {isAuth ? renderWithAuth(userId) : renderWithNotAuth()}
        </div>
    )
});

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    totalUsersCount: getTotalUsersCount(state),
});

export default connect(mapStateToProps, {getUserData})(App);
