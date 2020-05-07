const ADD_MESSAGE = 'ADD-MESSAGE',
      CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length++,
                message: state.newMessageText,
                owner: "me"
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;

        case CHANGE_TEXT_MESSAGE:
            console.log('CHANGE_TEXT_MESSAGE --- STATE --->>>', state);
            state.newMessageText = action.newMessageText;
            return state;

        default:
            return state;
    }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const changeTextMessageCreator = (text) => ({type: CHANGE_TEXT_MESSAGE, newMessageText: text});

export default dialogsReducer;