import React from "react";
import style from './FriendItem.module.scss';


const FriendItem = (props) => {

  return (
      <div className={style.friend}>
          <div className={style.img_block}>
              <img src={props.img}/>
          </div>
          <div className={style.name}>
              {props.name}
          </div>
      </div>
  )
};

export default FriendItem;