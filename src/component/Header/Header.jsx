import React from "react";
import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <img src={"http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png"}/>
        </header>
    );
};

export default Header;
