import React from "react";
import style from './Header.module.scss';
import chat from "../../assets/images/chat.svg"
import bell from "../../assets/images/bell.svg"
import {NavLink} from "react-router-dom";
import defaultUser from "../../assets/images/default-user.png";
import logo from "../../assets/images/developer-logo.png";

const Header = (props) => {

    let isUserData = () => {
        if (props.userData === null) {
            return defaultUser;
        } else {
            if (props.userData.photos.large) {
                return props.userData.photos.large;
            } else {
                return defaultUser;
            }
        }
    };

    return (
        <div className={style.main_header}>
            <header className={style.header}>
                <div className={style.header_inner}>
                    <div className={style.header_btn_traiger}>
                        <span> </span>
                    </div>
                    <div className={style.logo}>
                        <a href="#">
                            <img src={logo}/>
                        </a>
                    </div>
                    <div className={style.head_user}>
                        {props.isAuth
                            ? <a href="#" className={style.opts_icon_link}> Home </a>
                            : <NavLink to={"/login"} className={style.opts_icon_link}>Login</NavLink>
                        }
                        {props.isAuth
                            ? <a href="#" className={style.opts_icon_link}> {props.login} </a>
                            : " "
                        }

                        <a href="#" className={style.opts_icon}>
                            <img src={chat} alt=""/> <span>4</span>
                        </a>
                        <a href="#" className={style.opts_icon}>
                            <img src={bell} alt=""/> <span>3</span>
                        </a>
                        <a className={style.opts_account} href="#">
                            <img src={isUserData()}/>
                        </a>
                        {props.isAuth
                            ? <a onClick={props.logout} className={style.opts_icon_link}>Logout</a>
                            : " "
                        }
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
