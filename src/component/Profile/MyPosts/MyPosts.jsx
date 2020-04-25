import React from "react";
import style from './MyPosts.module.scss';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div className={style.posts_wrap}>
            <div className={style.post_new}>
                <h3>My Posts</h3>
                <textarea> </textarea>
                <button> Add Post </button>
            </div>
            <div className={style.posts}>
                <Post message={"Hello, hour are y?"} likesCount={7}/>
                <Post message={"Its my first post!"} likesCount={13}/>
            </div>
        </div>
    );
};

export default MyPosts;