import React from "react";
import style from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageCreator, changeTextMessageCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
console.log('Dialogs - props ---->>', props);
    let dialogsElements = props.store.dialogsData.map(dialog => <DialogItem img={dialog.imgUrl} id={dialog.id} name={dialog.name} />);
    let messagesElements = props.store.messagesData.map(message => <MessageItem id={message.id} message={message.message} owner={message.owner}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageCreator());
        props.dispatch(changeTextMessageCreator());
    };

    let handleChange = (e) => {
        let text = e.target.value;
        props.dispatch(changeTextMessageCreator(text));
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_list}>
                <h3>Dialogs</h3>
                <div>{dialogsElements}</div>
            </div>
            <div className={style.messages}>
                <h3>Message</h3>
                <div>{messagesElements}</div>
                <div className={style.send_message_aria}>
                    <textarea rows={"1"} ref={newMessageElement} onChange={handleChange} value={props.store.newMessageText}> </textarea>
                    <div className={style.button_block}>
                        <button onClick={addMessage}>
                            <span data-icon="send">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="currentColor"  d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"> </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
