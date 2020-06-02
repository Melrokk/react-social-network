import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getCurrentAuthUserProfileThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hocs/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        this.props.getCurrentAuthUserProfile(userId);
    }

    render() {

        return (
            <Profile userProfile={this.props.userProfile} {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    }
};

// let ProfileContainerWithAuthRedirect =  withAuthRedirect(ProfileContainer);
//
//
// let WithUrlDataContainerComponent = withRouter(ProfileContainerWithAuthRedirect);


export default compose(
    connect(mapStateToProps, {getCurrentAuthUserProfile: getCurrentAuthUserProfileThunkCreator}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);