import React from "react";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../redux/auth-reducer";
import Header from "./Header";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        userData: state.auth.userData,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
};

let WithUrlDataContainerComponent = withRouter(HeaderContainer);

export default connect(mapStateToProps, {logout: logoutThunkCreator})(WithUrlDataContainerComponent);

