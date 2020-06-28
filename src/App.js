import React from 'react';
import './App.scss';
import Navigation from "./component/Navigation/Navigation";
import {Route} from "react-router-dom";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";
import connect from "react-redux/es/connect/connect";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Spinner from "./component/common/Preloaders/Spinner/Spinner";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
        console.log("this.props.initializeApp =---", this.props.initializeApp());
    }

    render() {

        if(!this.props.initialized) {
            return <Spinner/>
        }
        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navigation state={this.props.state.sidebar}/>
                    <div className={"app-wrapper-content"}>
                        <div className={"app-wrapper-content-inner"}>
                            <Route path={"/profile/:userId?"}
                                   render={() =>
                                       <ProfileContainer/>
                                   }/>
                            <Route path={"/dialogs"}>
                                <DialogsContainer/>
                            </Route>
                            <Route path={"/users"}>
                                <UsersContainer/>
                            </Route>
                            <Route path={"/music"} component={Music}/>
                            <Route path={"/news"} component={News}/>
                            <Route path={"/settings"} component={Settings}/>
                            <Route path={"/login"} component={Login}/>
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    //withRouter,
    connect( mapStateToProps, {initializeApp})
)(App);

