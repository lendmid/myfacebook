import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="">News</NavLink></li>
                    <li><NavLink to="">Music</NavLink></li>
                    <li><NavLink to="">Settings</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;