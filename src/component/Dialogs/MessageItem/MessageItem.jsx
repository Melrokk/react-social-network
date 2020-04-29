import React from "react";
import style from './MessageItem.module.scss';
import classNames from 'classnames';


const MessageItem = (props) => {

    let getClassName = (props.owner === "me") ? style.message_out : style.message_in;

    let className = classNames(
        style.message,
        getClassName
    );

    return (
        <div className={className}>
            <div className={style.item}> {props.message} </div>
        </div>
    )
};


export default MessageItem;
