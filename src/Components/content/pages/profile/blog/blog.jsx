import React from 'react';
import s from './blog.module.css';
import BlogItems from './blog_items/blog_items';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";
const maxLength20 = maxLengthCreator(20);
const Blog = (props) => {
    let blogList = [...props.postsList]
        .reverse()
        .map(b => <BlogItems name={b.name} key={b.id} description={b.description} />);
    let AddNewPost = (values) =>{
        props.addPostFunc(values.newPostNameValue,values.newPostTextValue);
        values.newPostNameValue = '';
        values.newPostTextValue = '';
    }
    return (
        <div className={s.blog}>
            <AddPostReduxForm onSubmit={AddNewPost} />
            {blogList}
        </div>
    );
}
const AddPostForm = (props) => {
    return(
        <form className={s.addpost} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostNameValue"} placeholder={"The Title"}
                   validate={[required, maxLength20]} />
            <Field component={Textarea} name={"newPostTextValue"} placeholder={"The Content"}
                   validate={[required, maxLength20]} />
            <button className="btn"> Add Post</button>
        </form>
    );
}
const AddPostReduxForm = reduxForm({form: "profileAddPostForm"})(AddPostForm);
export default Blog;