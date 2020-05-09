import React from 'react';
import Dialog from "./dialog";
import {connect} from "react-redux";
import {sendMessageCreator} from "../../../../../redax/dialog-reducer";


let mapStateToProps = (state) =>{
    return {
        messages: state.dialogPage.messages,
        newMessageTextValue: state.dialogPage.newMessageTextValue
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addMessageFunk: (newMessageBody) =>{
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}
const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog);
export default DialogContainer;