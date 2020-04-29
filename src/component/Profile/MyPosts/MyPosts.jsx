import React from "react";
import style from './MyPosts.module.scss';
import Post from "./Posts/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likes} />);

    return (
        <div className={style.posts_wrap}>
            <div className={style.post_new}>
                <h3>My Posts</h3>
                <textarea> </textarea>
                <button> Add Post </button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;