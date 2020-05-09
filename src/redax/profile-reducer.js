import {ProfileAPI} from "../API/API";

const addPost = "addPost";
const deletePost = "deletePost";
const SET_USER_PROFILE ="SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    newPostTextValue: 'New Post Text',
    newPostNameValue: 'New Post Name',
    posts: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            description: 'Vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit.'
        },
        {
            id: 2,
            name: 'Lorem Dollor',
            description: 'Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.'
        },
        {
            id: 3,
            name: 'Dollor Ipsum',
            description: 'Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.'
        },
        {
            id: 4,
            name: 'Holly Dolly',
            description: 'Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.'
        },
        {
            id: 5,
            name: 'Lorem Ipsum',
            description: 'Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.'
        }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState ,action) => {
    switch (action.type) {
        case addPost:
            let newPostObj = {
                id: 1,
                name: (action.newPostNameValue),
                description: (action.newPostTextValue)
            }
            return {
                ...state,
                posts: [...state.posts,newPostObj]
            };
        case deletePost:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}
export const AddPost = (newPostNameValue, newPostTextValue) => ({type: addPost, newPostNameValue, newPostTextValue});
export const DeletePost = (id) => ({type: deletePost, id});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const profileData = (userId) =>{
    return async (dispatch) => {
        let response = await ProfileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
};
export const getUserStatus = (userId) => async (dispatch) => {
        let response = await ProfileAPI.getStatus(userId);
        dispatch(setUserStatus(response.data))
    };
export const updateUserStatus = (status) => async (dispatch) => {
        let response = await ProfileAPI.updateStatus(status)
        if(response.resultCode === 0){
            dispatch(setUserStatus(status))
        }
    };
export default profileReducer;

