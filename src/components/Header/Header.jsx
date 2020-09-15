import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import logOutImg from "../../assets/images/logOut.svg"
import {logOut} from "../../redux/authReducer";
import {connect} from "react-redux";

const Header = ({isAuth, logOut}) => {
    
    if (!isAuth) return <Redirect to={"/"} />;
    
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="">Music</NavLink></li>
                    <li><NavLink to="">Settings</NavLink></li>
                </ul>
            </nav>
            <button className={s.logOut} onClick={() => {
                logOut();
                return <Redirect to={"/"} />;
            }}>
                <img src={logOutImg} alt="log out" className={s.img}/>
                <span className={s.span}>Log out</span>
            </button>
        </header>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logOut})(Header);
