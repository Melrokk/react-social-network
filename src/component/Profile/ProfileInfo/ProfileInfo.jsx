import React from "react";
import style from './ProfileInfo.module.scss';
import Spinner from "../../common/Preloaders/Spinner/Spinner";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDoorClosed, faDoorOpen, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faInstagram, faTwitter, faVk, faYoutube} from "@fortawesome/free-brands-svg-icons";
import userPhoto from "../../../assets/images/default-user.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.userProfile) {
        return <Spinner/>
    } else {
        return (
            <div className={style.profile}>
                <div className={style.profile_cover}>
                    <img src={"https://www.w3schools.com/howto/img_snow_wide.jpg"}/>
                </div>
                <div className={style.profile_details}>
                    <div className={style.profile_image}>
                        <img src={props.userProfile.photos.large != null ? props.userProfile.photos.large : userPhoto}/>
                    </div>
                    <div className={style.profile_details_info}>
                        <h1>{props.userProfile.fullName}</h1>
                        <p>{props.userProfile.aboutMe}</p>
                        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                    </div>
                </div>
                <div className={style.profile_about_wrapper}>
                    <div className={style.profile_posts_wrapper}>

                    </div>
                    <div className={style.profile_about}>
                        <h3>About</h3>
                        <div className={style.list_group_item}>
                            <h5>
                                Description:
                                <span>
                                    {props.userProfile.lookingForAJobDescription}
                                </span>
                            </h5>
                        </div>
                        <div className={style.list_group_item}>
                            <h5>
                                Looking For A Job:
                                <span>
                                    {props.userProfile.lookingForAJob ? <FontAwesomeIcon icon={faDoorOpen}/> :
                                        <FontAwesomeIcon icon={faDoorClosed}/>}
                                </span>
                            </h5>
                        </div>
                        <hr/>
                        <div className={style.social_networks}>
                            <a className={style.social_networks_item} href={props.userProfile.contacts.facebook}>
                                <FontAwesomeIcon icon={faFacebook} fixedWidth/>
                            </a>
                            <a className={style.social_networks_item} href={props.userProfile.contacts.vk}>
                                <FontAwesomeIcon icon={faVk} fixedWidth/>
                            </a>
                            <a className={style.social_networks_item} href={props.userProfile.contacts.twitter}>
                                <FontAwesomeIcon icon={faTwitter} fixedWidth/>
                            </a>
                            <a className={style.social_networks_item} href={props.userProfile.contacts.instagram}>
                                <FontAwesomeIcon icon={faInstagram} fixedWidth/>
                            </a>
                            <a className={style.social_networks_item} href={props.userProfile.contacts.youtube}>
                                <FontAwesomeIcon icon={faYoutube} fixedWidth/>
                            </a>
                            <a className={style.social_networks_item} href={props.userProfile.contacts.github}>
                                <FontAwesomeIcon icon={faGithub} fixedWidth/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


};

export default ProfileInfo;