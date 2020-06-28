import {authAPI, profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS';


let initialState = {
    postsData: [
        {id: 1, message: 'Hello, hour are y?', likes: 10},
        {id: 2, message: 'Its my first post!', likes: 22},
        {id: 3, message: 'Hello, hour are y? Its my first post!', likes: 3},
        {id: 4, message: 'Its my first post! Hello, hour are y?', likes: 15},
        {id: 5, message: 'Search for the keywords to learn more about each warning.', likes: 0},
    ],
    status: "",
    userProfile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newPostText,
                likes: 5
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};

export const addPostCreator = (postBody) => ({type: ADD_POST, newPostText: postBody});

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

export const setUserStatus = (status) => ({type: SET_STATUS, status});

export const getUserStatusThunkCreator = (userId) => {

    return (dispatch) => {

        if(!userId) {
            authAPI.authMe().then(data => {
                if (data.resultCode === 0) {
                    userId = data.data.id;
                    profileAPI.getUserStatus(userId).then(data => {
                        dispatch(setUserStatus(data));
                    });
                }
            });
        } else {
            profileAPI.getUserStatus(userId).then(data => {
                dispatch(setUserStatus(data));
            });
        }

    }
};

export const updateUserStatusThunkCreator = (status) => {

    return (dispatch) => {

        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });

    }
};

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