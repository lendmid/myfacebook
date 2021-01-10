import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import ProfileContainer from "./components/Profile/ProfileContainer";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import Messages from './components/Messages/Messages';

import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {getUserData} from "./redux/authReducer";
import {connect, Provider} from "react-redux";
import {getProfile, getStatus, updateStatus} from "./redux/profileReducer";
import store from './redux/redux-store';
import {getTotalUsersCount} from "./redux/selectors/usersSelectors";


const App = React.memo(({isAuth, userId, getUserData}) => {

    useEffect(() => {
        getUserData();
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
                    <Route exact path="/profile/:userId" component={ProfileContainer}/>
                    <Route exact path="/messages/:userId" component={Messages}/>
                    <Route exact path='/users/:userId?' component={UsersContainer}/>
                    <Redirect to={`/profile/${userId}`}/>
                </Switch>
            </>
        )
    };

    if (!isAuth) return <Preloader/>;
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

const AppContainer = connect(mapStateToProps, {getProfile, getStatus, updateStatus, getUserData}
)(App);

// //for build on gitHub
// const MyFacebook = () => {
//     return (
//         <HashRouter>
//             <Provider store={store}>
//                 <AppContainer />
//             </Provider>
//         </HashRouter>
//     )
// }

//for local development
const MyFacebook = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
};

export default MyFacebook;
