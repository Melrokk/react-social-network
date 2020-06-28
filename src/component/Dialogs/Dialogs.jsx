import React from "react";
import style from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem img={dialog.imgUrl} id={dialog.id} key={dialog.id}
                                                                      name={dialog.name}/>);
    let messagesElements = state.messagesData.map(message => <MessageItem id={message.id} message={message.message}
                                                                          key={message.id} owner={message.owner}/>);
    const addNewMessage = (values) => {

        props.addMessage(values.messageBody);

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
                <AddMessageReduxForm state={props.dialogsPage} onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {

    let newMessageElement = React.createRef();

    return (
        <form className={style.send_message_aria} onSubmit={props.handleSubmit}>
            <Field name={'messageBody'}
                   component={Textarea}
                   validate={[required, maxLength50]}
                   rows={"1"}
                   placeholder={"Enter you message"}
            />
            <div className={style.button_block}>
                <button>
                    <span data-icon="send">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor"
                                  d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"> </path>
                        </svg>
                    </span>
                </button>
            </div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm(
    {
        form: 'addMessageForm'
    }
)(AddMessageForm);

export default Dialogs;
