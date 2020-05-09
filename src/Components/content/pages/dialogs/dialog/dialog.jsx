import React from 'react';
import s from './dialog.module.css';
import MessageItems from "./message_item/message_items";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/FormsControls/FormsControls";
import {required} from "../../../../../utils/validators/validators";

let Dialog = (props) => {
    let MessageList = props.messages.map ( m => <MessageItems key={m.messageId} value={m.value} user={m.user} />)
    let AddNewMessage = (values) =>{
        props.addMessageFunk(values.newMessageBody);
        values.newMessageBody = '';
    }
    return (
        <div className={s.dialog}>
            <div>
                {MessageList}
            </div>
            <AddMessageReduxForm onSubmit={AddNewMessage} />
        </div>
    );
}
const AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required]}
                   name={"newMessageBody"} placeholder={"Enter your message"} />
            <button className="btn">Send</button>
        </form>
    );
}
const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
export default Dialog;