import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li><a href="#1">Profile</a></li>
                    <li><a href="#1">Messages</a></li>
                    <li><a href="#1">News</a></li>
                    <li><a href="#1">Music</a></li>
                    <li><a href="#1">Settings</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;