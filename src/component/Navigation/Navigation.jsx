import React from "react";
import style from './Navigation.module.scss';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navigation = (props) => {

  return (
      <div className={style.main_sidebar}>
          <nav className={style.nav}>
              <div className={style.nav_inner}>
                  <article className={style.section}>
                      <div><NavLink className={style.item} activeClassName={style.active} to={"/profile"}>Profile</NavLink></div>
                      <div><NavLink className={style.item} activeClassName={style.active} to={"/dialogs"}>Massages</NavLink></div>
                      <div><NavLink className={style.item} activeClassName={style.active} to={"/users"}>Users</NavLink></div>
                      <div><NavLink className={style.item} activeClassName={style.active} to={"/news"}>News</NavLink></div>
                      <div><NavLink className={style.item} activeClassName={style.active} to={"/music"}>Music</NavLink></div>
                      <div className={style.settings}><NavLink className={style.item} activeClassName={style.active} to={"/settings"}>Settings</NavLink></div>
                  </article>
                  <article className={style.friends_inner}>
                      <Friends state={props.state.friends}/>
                  </article>
              </div>
          </nav>
      </div>

  )
};

export default Navigation;