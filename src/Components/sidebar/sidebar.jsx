import React from 'react';
import s from './sidebar.module.css'
import {NavLink} from "react-router-dom";

let Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <ul className={s.items}>
                <NavLink activeClassName={s.active_link} to="/profile"><li className={s.item}>
                    Profile
                </li></NavLink>
                <NavLink activeClassName={s.active_link} to="/dialogs"><li className={s.item}>
                    Dialogs
                </li></NavLink>
                <NavLink activeClassName={s.active_link} to="/users"><li className={s.item}>
                    Users
                </li></NavLink>
                <NavLink activeClassName={s.active_link} to="/login"><li className={s.item}>
                    Login
                </li></NavLink>
                
            </ul>
        </aside>
    );
}

export default Sidebar;