import {authAPI, usersAPI} from "../api/api";
import {setAuthUserData, setUserData} from "./auth-reducer";

const ADD_POST = 'ADD-POST',
    CHANGE_TEXT_POST = 'CHANGE-TEXT-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postsData: [
        {id: 1, message: 'Hello, hour are y?', likes: 10},
        {id: 2, message: 'Its my first post!', likes: 22},
        {id: 3, message: 'Hello, hour are y? Its my first post!', likes: 3},
        {id: 4, message: 'Its my first post! Hello, hour are y?', likes: 15},
        {id: 5, message: 'Search for the keywords to learn more about each warning.', likes: 0},
    ],
    newPostText: '123',
    userProfile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likes: 5
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case CHANGE_TEXT_POST: {
            return {
                ...state,
                newPostText: action.postText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            };
        }
        default:
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});

export const changeTextPostCreator = (text) => ({type: CHANGE_TEXT_POST, postText: text});

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

export const getUserProfileThunkCreator = (userId) => {

    return (dispatch) => {

        usersAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });

    }
};

export const getCurrentAuthUserProfileThunkCreator = (userId) => {

    return (dispatch) => {

        if(!userId) {
            authAPI.authMe().then(data => {
                if (data.resultCode === 0) {
                    userId = data.data.id;
                    usersAPI.getUserProfile(userId).then(data => {
                        dispatch(setUserProfile(data));
                    });
                }
            });
        } else {
            usersAPI.getUserProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            });
        }

    }
};

export default profileReducer;