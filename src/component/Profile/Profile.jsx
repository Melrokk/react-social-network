import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsConteiner";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo store={props.store} userProfile={props.userProfile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;
