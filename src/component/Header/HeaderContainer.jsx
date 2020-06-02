import React from "react";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "../../redux/auth-reducer";
import Header from "./Header";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.getAuthUserData();
    }

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

export default connect(mapStateToProps, {getAuthUserData: getAuthUserDataThunkCreator})(WithUrlDataContainerComponent);

