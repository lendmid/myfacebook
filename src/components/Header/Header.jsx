import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import signOutImg from "../../assets/images/signOut.svg"
import {signOut} from "../../redux/authReducer";
import {connect} from "react-redux";

const Header = ({isAuth, signOut}) => {
    
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
            <button className={s.signOut} onClick={() => {
                signOut();
                return <Redirect to={"/"} />;
            }}>
                <img src={signOutImg} alt="signOut" className={s.img}/>
                <span className={s.span}>Sign out</span>
            </button>
        </header>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {signOut})(Header);
