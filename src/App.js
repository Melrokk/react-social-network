import React from 'react';
import './App.scss';
import Header from "./component/Header/Header";
import Navigation from "./component/Navigation/Navigation";
import Profile from "./component/Profile/Profile";


const App = () => {
  return (
    <div className="app-wrapper">
    <Header/>
    <Navigation/>
    <Profile/>
    </div>
  );
};

export default App;

