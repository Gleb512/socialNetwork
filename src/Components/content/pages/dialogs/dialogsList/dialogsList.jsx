import React from 'react';
import s from './dialogsList.module.css';
import DialogsItems from './dialogsItems/dialogsItems'

let DialogsList = (props) => {
    let dialogList = props.dialogs.map ( d => <DialogsItems name={d.name} key={d.id} id={d.id} />)
    return (
        <div className={s.list}>
            {dialogList}
        </div>
    );
}

export default DialogsList;