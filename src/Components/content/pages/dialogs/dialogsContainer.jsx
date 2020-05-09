import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./dialogs";
import {withAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return {
        dialogPage: state.dialogPage,
    }
}
export default compose(connect(mapStateToProps,{}), withAuthRedirect)(Dialogs);