import React from "react";
import style from './Navigation.module.scss';

const Navigation = () => {
  return (
      <nav className={style.nav}>
          <div><a className={style.item} href={"/#"}>Massages</a></div>
          <div><a className={style.item} href={"/#"}>News</a></div>
          <div><a className={style.item} href={"/#"}>Music</a></div>
          <div><a className={style.item} href={"/#"}>Settings</a></div>
      </nav>
  )
};

export default Navigation;