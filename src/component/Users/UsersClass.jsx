import React from "react";
import style from './Users.module.scss';
import classNames from 'classnames';
import * as axios from "axios";
import userPhoto from "../../assets/images/default-user.png"

class Users extends React.Component {

    constructor(props) {
        super(props);

        console.log("New", this.props);
        if (this.props.usersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }

    buttonSmallPrimary = classNames(
        style.button,
        style.small,
        style.primary
    );

    buttonSmallSoftPrimary = classNames(
        style.button,
        style.small,
        style.soft_primary
    );

    render() {
        return (
            <div className={style.users_block}>
                <h2>Users List</h2>
                {
                    this.props.usersData.map(user =>
                        <div key={user.id} className={style.user_item}>
                            <div className={style.user_img_block}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                                {user.followed ?
                                    <button onClick={() => {
                                        this.props.unfollow(user.id)
                                    }} className={this.buttonSmallSoftPrimary}> Unfollow </button> :
                                    <button onClick={() => {
                                        this.props.follow(user.id)
                                    }} className={this.buttonSmallPrimary}> Follow </button>
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
    }
}


export default Users;