import {authAPI, usersAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
      SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    userData: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData
            };


        default:
            return state;
    }
};

export const setAuthUserData = ( id, login, email) => ({type: SET_AUTH_USER_DATA, data: {id, login, email}});
export const setUserData = (userData) => ({type: SET_USER_DATA, userData});

export const getAuthUserDataThunkCreator = () => {

    return (dispatch) => {

        authAPI.authMe().then(data => {
            if(data.resultCode === 0) {
                let {id, login, email} = data.data;

                usersAPI.getUserProfile(id).then(data => {
                    dispatch(setUserData(data));
                });
                dispatch(setAuthUserData(id, login, email));
            }
        });

    }
};

export default authReducer;