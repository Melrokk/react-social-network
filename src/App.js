import React from 'react';
import './App.scss';
import Header from "./component/Header/Header";
import Navigation from "./component/Navigation/Navigation";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation state={props.state.siteBar}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile state={props.state.profilePage}/>
                           }/>
                    <Route path={"/dialogs"}>
                        <Dialogs state={props.state.dialogsPage}/>
                    </Route>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

