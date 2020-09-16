import React from 'react';
import Header from './components/Header/Header';
import ProfileContainer from "./components/Profile/ProfileContainer";
import LogInConrainer from "./components/LogIn/LogInContainer";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";

import './App.css';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {getAuthUserData, logOut} from "./redux/authReducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {requestProfile, requestStatus, updateStatus} from "./redux/profileReducer";
import store from './redux/redux-store';

import Messages from './components/Messages/Messages';

// const Messages = React.lazy(() => import('./components/Messages/Messages'));


class App extends React.PureComponent {
    componentDidMount() {
        this.props.initializeApp();
        this.props.requestStatus();
    }
    
    rendereWithNotAuth() {
        return (
            <Switch>
                <Route exact path='/login' component={LogInConrainer} />
                <Redirect to={'/login'} />
            </Switch>
        )
    }
    
    renderWithAuth(id) {
        return (
            <>
            <Header />
            <Switch>
                <Route exact path='/login' component={LogInConrainer} />
                <Route exact path={`/profile/:${id}`} component={ProfileContainer} />
                <Route exact path={`/messages/:${id}`} component={Messages} />
                <Route exact path='/users' component={UsersContainer} />
                <Redirect to={`/profile/${id}`} />
            </Switch>
        </>
        )
    }
    
    render() {
        if (!this.props.initialized) return <Preloader />
        
        return (
            <div className="app-wrapper">
                {this.props.isAuth ? this.renderWithAuth(this.props.id) : this.rendereWithNotAuth()}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    initialized: state.app.initialized,
})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp, logOut, requestProfile, requestStatus, updateStatus, getAuthUserData}),
    withRouter,
    // withAuthRedirect, // incorrectly checks authorization and done Redirect
)(App)

const MyFacebook = () => {
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

{/*<div className="app-wrapper">*/}
{/*    */}
{/*    /!*где-то тут ошибка*!/*/}
{/*    /!*<Route exact path='/messages' render={() => {*!/*/}
{/*    /!*    <Suspense fallback={<Preloader />}>*!/*/}
{/*    /!*        <Messages />*!/*/}
{/*    /!*    </Suspense>*!/*/}
{/*    /!*}*!/*/}
{/*    /!*} />*!/*/}
{/*    */}
{/*    */}
{/*    <Header />*/}
{/*    <Switch>*/}
{/*        <Route exact path='/login' component={LogInConrainer} />*/}
{/*        <Route exact path={`/profile/:${id}`} component={ProfileContainer} />*/}
{/*        <Route exact path={`/messages/:${id}`} component={Messages}/>*/}
{/*        <Route exact path='/users' component={UsersContainer} />*/}
{/*    </Switch>*/}
{/*</div>*/}