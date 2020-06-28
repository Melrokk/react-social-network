import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getCurrentAuthUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push("/login");
            }

        }

        this.props.getCurrentAuthUserProfile(userId);

        this.props.getUserStatus(userId);

    }

    render() {

        return (
            <Profile userProfile={this.props.userProfile} {...this.props} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
};


export default compose(
    connect(mapStateToProps, {
        getCurrentAuthUserProfile: getCurrentAuthUserProfileThunkCreator,
        getUserStatus: getUserStatusThunkCreator,
        updateUserStatus: updateUserStatusThunkCreator
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);