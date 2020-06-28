import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
    SET_USER_DATA = 'SET_USER_DATA',
    SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA';


let initialState = {
    id: null,
    login: null,
    email: '',
    password: '',
    captcha: false,
    userData: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            };

        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData
            };
        case SET_USER_LOGIN_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {id, login, email, isAuth}
});
export const setUserData = (userData) => ({type: SET_USER_DATA, userData});
export const setUserLogin = (email, password, rememberMe, captcha) => ({
    type: SET_USER_LOGIN_DATA,
    data: {email, password, rememberMe, captcha}
});

export const getAuthUserDataThunkCreator = () => (dispatch) => {
     return   authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;

                usersAPI.getUserProfile(id).then(data => {
                    dispatch(setUserData(data));
                });
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
};

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe, true)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
};

export const logoutThunkCreator = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;