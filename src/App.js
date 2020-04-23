import React from 'react';
import './App.css';
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Profile from "./component/Profile";


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

