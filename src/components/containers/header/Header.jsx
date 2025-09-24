import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
export const Header = () => {
    return (
        <div className={'container'}>
            <nav className={`content ${style.navbar}`}>
                <NavLink
                    to='/'
                    className={style.link}>
                    Home
                </NavLink>
                <NavLink
                    to='/favorites'
                    className={`${style.link}`}>
                    Favorites
                </NavLink>
                <NavLink
                    to='/watched'
                    className={`${style.link}`}>
                    Watched
                </NavLink>
            </nav>
        </div>
    );
};
