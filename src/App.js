import React from 'react';
import './App.scss';
import Header from "./component/Header/Header";
import Navigation from "./component/Navigation/Navigation";
import Profile from "./component/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation state={props.state.sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() =>
                               <Profile/>
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
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

