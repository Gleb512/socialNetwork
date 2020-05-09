import React from "react";
import s from './FormsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({input,meta, child, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? s.formControl + " " + s.error : ""}>
            {props.children}
            {hasError  && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea = (props) => {
    const {input,meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const {input,meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
export const CreateField = (validators, type, placeholder, name, component, text = "") => (<div>
    <Field validate={validators} type={type}
           placeholder={placeholder} name={name} component={component}
    />{text}
</div>
)