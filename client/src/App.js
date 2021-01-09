import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import ProfileContainer from "./components/Profile/ProfileContainer";
import LogIn from "./components/LogIn/LogIn";
import RegisterContainer from "./components/Register/RegisterContainer";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import Messages from './components/Messages/Messages';

import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {getAuthUserData, logOut} from "./redux/authReducer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {getProfile, getStatus, updateStatus} from "./redux/profileReducer";
import store from './redux/redux-store';
import {getTotalUsersCount} from "./redux/usersSelectors";


const App = React.memo(({isAuth, authorizedUserId, initialized, initializeApp, getAuthUserData}) => {

    useEffect(() => {
        initializeApp();
        getAuthUserData();
    }, [initializeApp, getAuthUserData]);
    
    let renderWithNotAuth = () => {
        return (
            <Switch>
                <Route exact path='/login' component={LogIn} />
                <Route exact path='/register' component={RegisterContainer} />
                <Redirect to={'/login'} />
            </Switch>
        )
    };
    
    let renderWithAuth = (authorizedUserId) => {
        return (
            <>
            <Header />
            <Switch>
                <Route exact path='/register' component={RegisterContainer} />
                <Route exact path="/profile/:userId" component={ProfileContainer} />
                <Route exact path="/messages/:userId" component={Messages} />
                <Route exact path='/users/:userId?' component={UsersContainer} />
                <Redirect to={`/profile/${authorizedUserId}`} />
            </Switch>
        </>
        )
    };
    
    if (!initialized) return <Preloader />;
    
    return (
        <div className="app-wrapper">
            {isAuth ? renderWithAuth(authorizedUserId) : renderWithNotAuth()}
            <div id="alerts" className="alerts"/>
        </div>
    )
});

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.authorizedUserId,
    initialized: state.app.initialized,
    totalUsersCount: getTotalUsersCount(state),
});

const AppContainer = connect(mapStateToProps, {initializeApp, logOut, getProfile, getStatus, updateStatus, getAuthUserData}
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
