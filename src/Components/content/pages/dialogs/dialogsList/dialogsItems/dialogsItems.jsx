import React from 'react';
import s from './dialogsItems.module.css';
import { NavLink } from "react-router-dom";

let DialogsItems = (props) => {
    return (
        <div className={s.list_item}>
            <div className={s.item_name}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogsItems; 