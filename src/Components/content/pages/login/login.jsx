import React from 'react';
import { reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {CreateField, Input} from "../../../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../../../redax/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../../../common/FormsControls/FormsControls.module.css"

const maxLength30 = maxLengthCreator(30);
const LoginForm = ({handleSubmit, error}) => {
    debugger
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {CreateField([required, maxLength30],"email",
                        "Email","email",Input)}
                {CreateField([required, maxLength30],"password",
                    "Password","password",Input)}
                {CreateField([],"checkbox",
                    "","rememberMe",Input, "remember me")}
                {error && <div className={s.formSumaryError}>
                    {error}
                </div>}
                <div>
                    <button>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
const LoginReduxForm = reduxForm({form: 'LoginPage'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);