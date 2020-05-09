import React from 'react';
import s from './message_items.module.css';

let MessageItems = (props) =>{
    return (
        <div className={s.user_message + ' ' + s.message}>
            {props.value}
        </div>
    );
}
export default MessageItems;