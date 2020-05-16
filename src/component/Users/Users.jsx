import React from "react";
import style from './Users.module.scss';
import classNames from 'classnames';

let Users = (props) => {

    if(props.usersData.length === 0){
        props.setUsers([
            {
                id: 1,
                fullName: "Bob",
                status: "im a dog, not a god!",
                logoUrl: "https://www.kindpng.com/userimgs/710.jpg",
                followed: false,
                location: {
                    city: "New York",
                    country: "USA"
                }
            },
            {
                id: 2,
                fullName: "Lisa",
                status: "Lets rock!",
                logoUrl: "https://www.kindpng.com/userimgs/752.jpg",
                followed: true,
                location: {
                    city: "Moscow",
                    country: "Russian Federation"
                }
            },
            {
                id: 3,
                fullName: "Max",
                status: "No pain, no game!",
                logoUrl: "https://www.kindpng.com/userimgs/7555.jpg",
                followed: false,
                location: {
                    city: "Kazan",
                    country: "Russian Federation"
                }
            },
            {
                id: 4,
                fullName: "Roberta",
                status: "Booykasha!",
                logoUrl: "https://www.kindpng.com/userimgs/760.jpg",
                followed: true,
                location: {
                    city: "Minsk",
                    country: "Belarus"
                }
            },
        ]);
    }

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
            {
                props.usersData.map(user =>
                    <div key={user.id} className={style.user_item}>
                        <div className={style.user_img_block}>
                            <img src={user.logoUrl}/>
                            {user.followed ?
                                <button onClick={() => {props.unfollow(user.id)}} className={buttonSmallSoftPrimary}> Unfollow </button> :
                                <button onClick={() => {props.follow(user.id)}} className={buttonSmallPrimary}> Follow </button>
                            }

                        </div>
                        <div className={style.user_data_block}>
                            <div className={style.user_name}>{user.fullName}</div>
                            <div className={style.user_status}>{user.status}</div>
                            <div className={style.user_country}>{user.location.country}</div>
                            <div className={style.user_city}>{user.location.city}</div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Users;