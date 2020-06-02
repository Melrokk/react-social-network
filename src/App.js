import React from 'react';
import './App.scss';
import Navigation from "./component/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation state={props.state.sidebar}/>
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
        </BrowserRouter>
    );
};

export default App;

