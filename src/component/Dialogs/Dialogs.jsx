import React from "react";
import style from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem img={dialog.imgUrl}  id={dialog.id} name={dialog.name} />);
    let messagesElements = props.state.messagesData.map(message => <MessageItem id={message.id} message={message.message} owner={message.owner}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_list}>
                <h3>Dialogs</h3>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <h3>Message</h3>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
