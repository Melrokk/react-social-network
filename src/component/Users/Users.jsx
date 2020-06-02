import React from "react";
import style from './Users.module.scss';
import classNames from 'classnames';
import userPhoto from "../../assets/images/default-user.png"
import UserPreloader from "../common/Preloaders/Placeholder-loading/UserPreloader";
import {NavLink} from "react-router-dom";


let Users = (props) => {

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

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let currentPage = props.currentPage;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let fivePages = pages.slice(currentPage - 1, currentPage + 4);

    return (
        <div className={style.users_block}>
            <ul className={style.pagination_wrapper}>
                {fivePages.map(p => {
                        return (
                            <li key={p} className={props.currentPage === p ? style.activePage : ""}><a onClick={(e) => {
                                props.onPageChanged(p);
                            }}>{p}</a></li>
                        )
                    }
                )}
            </ul>

            <h2>Users List</h2>
            {props.isFetching ? <UserPreloader/> :
                props.usersData.map(user =>
                    <div key={user.id} className={style.user_item}>
                        <div className={style.user_img_block}>
                            <NavLink to={`/profile/` + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            </NavLink>
                            {user.followed ?
                                <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.onUnfollowUser(user.id)
                                }} className={buttonSmallSoftPrimary}> Unfollow </button> :
                                <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.onFollowUser(user.id);
                                }} className={buttonSmallPrimary}> Follow </button>
                            }

                        </div>
                        <div className={style.user_data_block}>
                            <div className={style.user_name}>{user.name}</div>
                            <div className={style.user_status}>{user.status} user.status</div>
                            <div className={style.user_country}>{"user.location.country"}</div>
                            <div className={style.user_city}>{"user.location.city"}</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Users;