import React from "react";
import style from './Post.module.scss';

const Post = (props) => {
    return (
            <div className={`${style.item} ${style.active}`}>
                <div className={style.logo}>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZH7c1xxmppduvnIzq7oevpcDCK3nDoGgqjR6-yZ7L7kHCKDeq&usqp=CAU"}/>
                </div>
                <span className={style.text}>{props.message}</span>
                <span> like ({props.likesCount})</span>
            </div>
    );
};

export default Post;