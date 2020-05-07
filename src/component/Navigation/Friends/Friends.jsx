import React from "react";
import style from './Friends.module.scss';
import FriendItem from "./FriendItem/FriendItem";


const Friends = (props) => {

    let friendsElements = props.store.map(friend =>
        <FriendItem
            id={friend.id}
            img={friend.imgUrl}
            name={friend.name}
        />);

    return (
        <div className={style.friends_block}>
            <h4>Friends</h4>
            <div className={style.friends_block_content}>
                {friendsElements}
            </div>
        </div>
    )
};

export default Friends;