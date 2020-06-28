import {createSelector} from "reselect";


export const getUsers = (state) => {
    return state.usersPage.usersData;
};

export const getUsersSuperSelector = createSelector (
    state => state.values.value1,
    state => state.values.value2,
    (value1, value2) => value1 + value2
);

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getIsFollowingInProgress = (state) => {
    return state.usersPage.isFollowingInProgress;
};