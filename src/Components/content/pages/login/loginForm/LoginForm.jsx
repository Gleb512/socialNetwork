import React from "react";
import {Field} from "redux-form";


const LoginForm = (props) => {
    return (
        <form>
            <div>
                <Field placeholder={"Email"} name={"Login"} componetn={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} componetn={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"remember"} componetn={"input"} /> remember me
            </div>
            <div>
                <button>
                    Login
                </button><br/>
            </div>
        </form>
    );
}

export default LoginForm;
