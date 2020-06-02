import React from "react";
import style from './ProfileStatus.module.scss';


const ProfileStatus = (props) => {

    return (
        <>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status} type="text"/>
            </div>

        </>
    )


};

export default ProfileStatus;