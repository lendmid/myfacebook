import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Users from "./components/Users/Users";
import Messages from './components/Messages/Messages';

import style from './rootStyles/App.module.scss';
import {Route, Routes} from 'react-router-dom';
import {getUserData} from "./store/reducers/auth.reducer";
import {connect} from "react-redux";
import {getTotalUsersCount} from "./store/selectors/usersSelectors";
import {AppStateType} from "./store";


interface IProps {
    isAuth: boolean
    userId: string | null
    getUserData(): void
}

// function RequireAuth({ children }: { children: JSX.Element }) {
//     let auth = useAuth();
//     let location = useLocation();
//
//     if (!auth.user) {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//
//     return children;
// }
const App = React.memo(({isAuth, userId, getUserData}: IProps) => {

    useEffect(getUserData, [getUserData]); // rewrite this code to tokens


    let renderWithNotAuth = () => (
        <Routes>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/register' element={<Register/>}/>
            {/*<Redirect to='/login'/>*/}
        </Routes>
    )

    let renderWithAuth = (userId: string | null) => (
        <>
            <Header/>
            <Routes>
                <Route path='/login' element={<LogIn/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path="/profile/:userId" element={<Profile/>}/>
                <Route path="/messages/:userId" element={<Messages/>}/>
                <Route path='/users/:userId?' element={<Users/>}/>
                {/*<Redirect to={`/profile/${userId}`}/>*/}
            </Routes>
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
