const ADD_POST = 'ADD-POST',
    CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';


let initialState = {
    postsData: [
        {id: 1, message: 'Hello, hour are y?', likes: 10},
        {id: 2, message: 'Its my first post!', likes: 22},
        {id: 3, message: 'Hello, hour are y? Its my first post!', likes: 3},
        {id: 4, message: 'Its my first post! Hello, hour are y?', likes: 15},
        {id: 5, message: 'Search for the keywords to learn more about each warning.', likes: 0},
    ],
    newPostText: '123'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likes: 5
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case CHANGE_TEXT_POST: {
            return {
                ...state,
                newPostText: action.postText
            };
        }
        default:
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});

export const changeTextPostCreator = (text) => ({type: CHANGE_TEXT_POST, postText: text});

export default profileReducer;