import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import ProfileContainer from "./components/Profile/ProfileContainer";
import LogInContainer from "./components/LogIn/LogInContainer";
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
                <Route exact path='/login' component={LogInContainer} />
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
                <Route exact path='/login' component={LogInContainer} />
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
        </div>
    )
});

// class App extends React.PureComponent {
//     componentDidMount() {
//         this.props.initializeApp();
//         this.props.getAuthUserData();
//     }
//
//     renderWithNotAuth() {
//         return (
//             <Switch>
//                 <Route exact path='/login' component={LogInContainer} />
//                 <Route exact path='/register' component={RegisterContainer} />
//                 <Redirect to={'/login'} />
//             </Switch>
//         )
//     }
//
//     renderWithAuth(authorizedUserId) {
//         return (
//             <>
//             <Header />
//             <Switch>
//                 <Route exact path='/login' component={LogInContainer} />
//                 <Route exact path='/register' component={RegisterContainer} />
//                 <Route exact path="/profile/:userId" component={ProfileContainer} />
//                 <Route exact path="/messages/:userId" component={Messages} />
//                 <Route exact path='/users/:userId?' component={UsersContainer} />
//                 <Redirect to={`/profile/${authorizedUserId}`} />
//             </Switch>
//         </>
//         )
//     }
//
//     render() {
//         if (!this.props.initialized) return <Preloader />;
//
//         return (
//             <div className="app-wrapper">
//                 {this.props.isAuth ? this.renderWithAuth(this.props.authorizedUserId) : this.renderWithNotAuth()}
//             </div>
//         )
//     }
// }

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
