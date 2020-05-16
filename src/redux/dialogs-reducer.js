const ADD_MESSAGE = 'ADD-MESSAGE',
    CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: "Hi, how are you?", owner: "user.id"},
        {id: 2, message: "Im glad to see you!", owner: "user.id"},
        {id: 3, message: "Either with meaningful text", owner: "me"},
        {id: 4, message: "Sam Green Either with meaningful text", owner: "me"},
        {id: 5, message: "Hi, how are you? Freed", owner: "user.id"},
        {id: 6, message: "Img elements must have an alt prop, either with meaningful text", owner: "me"},
    ],
    dialogsData: [
        {id: 1, name: "Egor", imgUrl: "https://www.kindpng.com/userimgs/710.jpg"},
        {id: 2, name: "Max", imgUrl: "https://www.kindpng.com/userimgs/188.jpg"},
        {id: 3, name: "Serge", imgUrl: "https://www.kindpng.com/userimgs/7555.jpg"},
        {id: 4, name: "An Lee", imgUrl: "https://www.kindpng.com/userimgs/760.jpg"},
        {id: 5, name: "Sara Bullak", imgUrl: "https://www.kindpng.com/userimgs/752.jpg"}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: state.messagesData.length + 1,
                    message: state.newMessageText,
                    owner: "me"
                }],
                newMessageText: '',
            };

        case CHANGE_TEXT_MESSAGE: {
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        }

        default:
            return state;
    }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const changeTextMessageCreator = (text) => ({type: CHANGE_TEXT_MESSAGE, newMessageText: text});

export default dialogsReducer;