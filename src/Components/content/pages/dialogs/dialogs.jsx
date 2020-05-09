import React from 'react';
import s from './dialogs.module.css';
import DialogsList from './dialogsList/dialogsList';
import DialogContainer from "./dialog/dialogContainer";

let Dialogs = (props) => {


    return (
        <div className={s.dialogs}>
            <DialogsList dialogs={props.dialogPage.dialogs} />
            <DialogContainer  />
        </div>
    );
}
export default Dialogs;
