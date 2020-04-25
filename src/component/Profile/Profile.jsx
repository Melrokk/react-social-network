import React from "react";
import style from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src={"https://www.w3schools.com/howto/img_snow_wide.jpg"}/>
            </div>
            <div className={style.personal_data}>
                <img src={"https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"}/>
                <div className={style.text}>
                    <article className={style.name}> Name: Egor </article>
                    <article className={"city"}> City: Novosib</article>
                    <article className={"education"}> Education:  MSK'11</article>
                    <article className={"site"}> Web-site: www.test.test </article>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;