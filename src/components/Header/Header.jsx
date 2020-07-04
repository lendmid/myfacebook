import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/dialogs">Messages</a></li>
                    <li><a>News</a></li>
                    <li><a>Music</a></li>
                    <li><a>Settings</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;