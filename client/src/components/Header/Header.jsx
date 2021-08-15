import React from 'react';
import s from './Header.module.css';
import {Link, Redirect} from "react-router-dom";
import logOutImg from "../../assets/images/logOut.svg"
import logo from "../../assets/images/logo.png";
import {logOut} from "../../store/reducers/auth.reducer";
import {connect} from "react-redux";

const Header = ({logOut, userId}) => {
    return (
        <header className={s.header}>
            <Link to={`/profile/${userId}`} className={s.logo_link}>
                <img src={logo} alt="company logo" className={s.logo}/>
            </Link>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li><Link to={`/profile/${userId}`}>Profile</Link></li>
                    <li><Link to={`/messages/${userId}`}>Messages</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>
            <button className={s.logOut} onClick={() => {
                logOut();
                return <Redirect to={"/login"} />;
            }}>
                <img src={logOutImg} alt="log out" className={s.img} />
                <span className={s.span}>Log out</span>
            </button>
        </header>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
})

export default connect(mapStateToProps, {logOut})(Header);
