import React from 'react';
import s from './banner.module.css';
import Preloader from "../../../../common/Preloader/Preloader";
import avatarImg from "../../../../../assets/avatar10.jpg";
import {NavLink} from "react-router-dom";
import ProfileStatusWithHooks from "./profileStatus/profileStatusWithHooks";

let Banner = (props) => {
    if ( !props.profile ){
        return <Preloader />
    }
        return (
            <div className={s.banner}>
                <img className={s.userphoto} alt={"User"}
                     src={props.profile.photos.large != null ? props.profile.photos.small : avatarImg  } />
                <h3>{props.profile.fullName}</h3>
                <ProfileStatusWithHooks updateUserStatus={props.updateUserStatus} status={props.status} />
                <h4>{props.profile.aboutMe} </h4>
                <h4>{props.profile.email} </h4>
                <p>{props.profile.lookingForAJobDescription}</p>
                <NavLink to="/dialogs" className="btn">
                    dialogs
                </NavLink>
            </div>
        );


}

export default Banner; 