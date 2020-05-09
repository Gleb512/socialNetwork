import React from 'react';
import s from './profile.module.css';
import Banner from './banner/banner';
import BlogContainer from "./blog/blogContainer";

let Profile = (props) => {
    return (
        <div className={s.profile}>
            <Banner profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <BlogContainer />
        </div>
    );
}

export default Profile;