import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import signOut from "../../assets/images/signOut.svg"

const Header = (props) => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="">Music</NavLink></li>
                    <li><NavLink to="">Settings</NavLink></li>
                </ul>
            </nav>
            <button className={s.signOut}>
                <img src={signOut} alt="signOut" className={s.img}/>
                <span className={s.span}>Sign out</span>
            </button>
        </header>
    )
}
export default Header;