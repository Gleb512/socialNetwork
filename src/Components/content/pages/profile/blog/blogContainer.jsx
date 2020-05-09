import React from 'react';
import Blog from "./blog";
import {connect} from "react-redux";
import {AddPost} from "../../../../../redax/profile-reducer";
let mapStateToProps = (state) =>{
    return {
        newPostNameValue: state.profilePage.newPostNameValue,
        newPostTextValue: state.profilePage.newPostTextValue,
        postsList: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPostFunc: (newPostNameValue,newPostTextValue) => {
            dispatch(AddPost(newPostNameValue,newPostTextValue));
        }
    }
}
const BlogContainer = connect(mapStateToProps,mapDispatchToProps)(Blog);
export default BlogContainer;