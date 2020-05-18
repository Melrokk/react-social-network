import React from "react";
import style from './Navigation.module.scss';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navigation = (props) => {

  return (
      <nav className={style.nav}>
          <div><NavLink className={style.item} activeClassName={style.active} to={"/profile"}>Profile</NavLink></div>
          <div><NavLink className={style.item} activeClassName={style.active} to={"/dialogs"}>Massages</NavLink></div>
          <div><NavLink className={style.item} activeClassName={style.active} to={"/users"}>Users</NavLink></div>
          <div><NavLink className={style.item} activeClassName={style.active} to={"/news"}>News</NavLink></div>
          <div><NavLink className={style.item} activeClassName={style.active} to={"/music"}>Music</NavLink></div>
          <div className={style.settings}><NavLink className={style.item} activeClassName={style.active} to={"/settings"}>Settings</NavLink></div>
          <hr/>
          <Friends state={props.state.friends}/>

      </nav>
  )
};

export default Navigation;