import React from "react";
import style from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={style.dialog}>
            <div className={style.dialog_img}>
                <img src={props.img}/>
            </div>
            <span> {props.name} </span>
        </NavLink>
    );
};

export default DialogItem;
