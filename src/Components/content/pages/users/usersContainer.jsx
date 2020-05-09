import React from 'react';
import {connect} from "react-redux";
import {follow, unfollow, setСurrentPage, getUsers, getNeededPage} from "../../../../redax/users-reducer";
import Users from "./users";
import Preloader from "../../../common/Preloader/Preloader";
import {
    getAllUsers,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../../../redax/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };
    onPageChenged = (pageNumber) => {
        this.props.getNeededPage(pageNumber, this.props.pageSize);
    }
    render(){
        return <>
            { this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChenged={this.onPageChenged}
                          users={this.props.users}
                          follow={ this.props.follow}
                          unfollow={this.props.unfollow}
                />
            </>
    }
}
let mapStateToProps = (state) =>{
    return{
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
}
const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setСurrentPage, getUsers, getNeededPage})
    (UsersAPIComponent);

export default UsersContainer;