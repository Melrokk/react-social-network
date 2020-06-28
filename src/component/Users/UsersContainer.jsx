import React from "react";
import {connect} from "react-redux";
import {
    follow,
    followUserThunkCreator,
    getUsersCurrentPageThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    unfollow,
    unfollowUserThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import {withAuthRedirect} from "../hocs/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersCurrentPage(pageNumber, this.props.pageSize);

    };

    onUnfollowUser = (id) => {
        this.props.unfollowUser(id);
    };

    onFollowUser = (id) => {
        this.props.followUser(id);
    };

    render() {
        return (
            <>
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    usersData={this.props.usersData}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                    onUnfollowUser={this.onUnfollowUser}
                    onFollowUser={this.onFollowUser}
                    isFetching={this.props.isFetching}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                />

            </>)
    }
}

// const mapStateToProps = (state) => {
//     return {
//         usersData: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingInProgress: state.usersPage.isFollowingInProgress
//     }
// };

const mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
};


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers: getUsersThunkCreator,
        getUsersCurrentPage: getUsersCurrentPageThunkCreator,
        unfollowUser: unfollowUserThunkCreator,
        followUser: followUserThunkCreator
    }),
    //withAuthRedirect
)(UsersContainer);