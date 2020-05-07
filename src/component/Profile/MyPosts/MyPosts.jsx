import React from "react";
import style from './MyPosts.module.scss';
import Post from "./Posts/Post";
import {addPostCreator, changeTextPostCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreator());
        props.dispatch(changeTextPostCreator());
    };

    let handleChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(changeTextPostCreator(text));
    };

    return (
        <div className={style.posts_wrap}>
            <div className={style.post_new}>
                <h3>My Posts</h3>
                <textarea ref={newPostElement} onChange={handleChange} value={props.newPostText}> </textarea>
                <button onClick={addPost}> Add Post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;