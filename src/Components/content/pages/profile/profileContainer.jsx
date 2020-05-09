import React from 'react';
import Profile from './profile.jsx';
import {connect} from "react-redux";
import {getUserStatus, profileData, updateUserStatus} from "../../../../redax/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileAPIContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.autorisedUserId;
            if(!userId){
                this.props.history.push("./login");
            }
        }
        this.props.profileData(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {profileData, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileAPIContainer);