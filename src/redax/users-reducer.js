import {followedAPI, UsersAPI} from "../API/API";
import {updateObjectIArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SETCURRENTPAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

let initialState = {
    users: [ ],
    pageSize: 95,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState , action) => {
    switch (action.type) {
        case UNFOLLOW:
            return {
                ...state,
                /*users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followed: false}
                    }
                    return u;
                })*/
                users: updateObjectIArray(state.users, action.id, "id", {followed: false})
            };
        case FOLLOW:
            return  {
                ...state,
                users: updateObjectIArray(state.users, action.id, "id", {followed: true})
            };
        case SETUSERS:
            return { ...state, users: action.users}
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count}
        case TOOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const acceptFollow = (id) => ({type: FOLLOW, id});
export const acceptUnfollow = (id) => ({type: UNFOLLOW, id});
export const setUsers = (users) => ({type: SETUSERS, users});
export const setСurrentPage = (currentPage) =>  ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (count) =>  ({type: SET_TOTAL_USERS_COUNT, count});
export const setToggleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});
export const getUsers = (currentPage,pageSize) =>{
    return async (dispatch) => {
        dispatch(setToggleIsFetching(true));
        let response = await UsersAPI.getUsers(currentPage,  pageSize);
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
    }
}
export const getNeededPage = (pageNumber,pageSize) =>{
    return async (dispatch) => {
        dispatch(setСurrentPage(pageNumber));
        dispatch(setToggleIsFetching(true));
        let response = await UsersAPI.getUsers(pageNumber,pageSize);
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(response.items));
    }
}
const followUnfollowFlow = async (dispatch,id, apiMethod, actionCreator) => {
    let response = await apiMethod(id)
    if(response.resultCode === 0){
        dispatch(actionCreator(id));
    }
}
export const follow = (id) =>{
    return async (dispatch) => {
        followUnfollowFlow(dispatch,id, followedAPI.followRequest.bind(followedAPI), acceptFollow);
    }
}
export const unfollow = (id) =>{
    return async (dispatch) => {
        followUnfollowFlow(dispatch,id, followedAPI.UnfollowRequest.bind(followedAPI), acceptUnfollow);
    }
}

export default usersReducer;