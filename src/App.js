import React from 'react';
import Header from './components/Header/Header';
import ProfileContainer from "./components/Profile/ProfileContainer";
import LogInConrainer from "./components/LogIn/LogInContainer";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";

import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {getAuthUserData, logOut} from "./redux/authReducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {requestProfile, requestStatus, updateStatus} from "./redux/profileReducer";
import store from './redux/redux-store';

import Messages from './components/Messages/Messages';
// const Messages = React.lazy(() => import('./components/Messages/Messages'));


// const rendereWithNotAuth = () => {
//     return (
//         <div>123124</div>
//     )
// }
//
// const renderWithAuth = () => {
//     return (
//         <div className="app-wrapper">
//             <Header store={this.props.store} />
//             <Route exact path='/messages' render={() => <Messages store={this.props.store} />} />
//             <Route exact path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store} />} />
//             <Route exact path='/users' render={() => <UsersContainer store={this.props.store} />} />
//             <Route exact path='/' render={() => <LogInConrainer store={this.props.store} />} />
//         </div>
//     )
// }

class App extends React.PureComponent {
    componentDidMount() {
        this.props.initializeApp();
        let userId = this.findId();
        this.props.requestProfile(userId);
        this.props.requestStatus(userId);
    }
    
    findId() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authorizedUserId;
        if (!userId) userId = 11132;
        return userId;
    }
    
    render() {
        if (!this.props.initialized) return <Preloader />
        let userId = this.findId();
        // return this.props.isAuth ? renderWithAuth : rendereWithNotAuth;
        return (
            <div className="app-wrapper">
                <Header store={this.props.store} />
                
                {/*где-то тут ошибка*/}
                {/*<Route exact path='/messages' render={() => {*/}
                {/*    <Suspense fallback={<Preloader />}>*/}
                {/*        <Messages />*/}
                {/*    </Suspense>*/}
                {/*}*/}
                {/*} />*/}
                
                {/*<Route exact path={`/messages/:${userId}`} render={() => <Messages />} />*/}
                {/*<Route exact path={`/profile/:${userId}`} render={() => <ProfileContainer store={this.props.store} />} />*/}
                <Route exact path={`/messages/:${userId}?`} render={() => <Messages />} />
                <Route exact path={`/profile/:${userId}?`} render={() => <ProfileContainer />} />
                <Route exact path='/users' render={() => <UsersContainer />} />
                <Route exact path='/' render={() => <LogInConrainer />} />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, logOut, requestProfile, requestStatus, updateStatus, getAuthUserData}),
    // withAuthRedirect, // incorrectly checks authorization and done Redirect
)(App)

const MyFacebook = (props) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default MyFacebook;
