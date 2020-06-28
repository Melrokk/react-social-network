import React from "react";
import style from './MyPosts.module.scss';
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likes}/>);

    const addNewPost = (values) => {
        props.addPost(values.postBody);
    };

    return (
        <div className={style.posts_wrap}>
            <div className={style.post_new}>
                <h3>My Posts</h3>
                <MyPostsReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"postBody"} component={Textarea} placeholder={"Enter you message"} validate={[required, maxLength10]}/>
            <button> Add Post</button>
        </form>
    )
};

const MyPostsReduxForm = reduxForm(
    {form: "ProfileAddNemPostForm"}
)(MyPostsForm);

export default MyPosts;