import React from 'react';
import s from './header.module.css'
import {NavLink} from "react-router-dom";
let Header = (props) => {
  return (
    <div className={s.header}>
      <div>
        <p className={s.logo}>Social @Network 0.1</p>
      </div>
        <div className={s.loginBlock}>
            { props.isAuth ?
                <div className={s.loginBlockAuth}>
                    <NavLink to={'/profile/' + props.id }>{props.login}</NavLink><br/>
                    <button onClick={props.logout}>Log out</button>
                </div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </div>
  );
}
export default Header;