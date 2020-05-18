import React from "react";
import style from './Users.module.scss';
import classNames from 'classnames';
import * as axios from "axios";
import userPhoto from "../../assets/images/default-user.png"

let Users = (props) => {

    let getUsers = () => {
        if (props.usersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                console.log('response', response);
                console.log('response.data.items', response.data.items);
                props.setUsers(response.data.items);
            });
        }
    };

    let buttonSmallPrimary = classNames(
        style.button,
        style.small,
        style.primary
    );

    let buttonSmallSoftPrimary = classNames(
        style.button,
        style.small,
        style.soft_primary
    );

    return (
        <div className={style.users_block}>
            <h2>Users List</h2>
            <button className={buttonSmallPrimary} onClick={getUsers}>Get Users</button>
            {
                props.usersData.map(user =>
                    <div key={user.id} className={style.user_item}>
                        <div className={style.user_img_block}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            {user.followed ?
                                <button onClick={() => {
                                    props.unfollow(user.id)
                                }} className={buttonSmallSoftPrimary}> Unfollow </button> :
                                <button onClick={() => {
                                    props.follow(user.id)
                                }} className={buttonSmallPrimary}> Follow </button>
                            }

                        </div>
                        <div className={style.user_data_block}>
                            <div className={style.user_name}>{user.name}</div>
                            <div className={style.user_status}>{user.status}</div>
                            <div className={style.user_country}>{"user.location.country"}</div>
                            <div className={style.user_city}>{"user.location.city"}</div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Users;