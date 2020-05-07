const ADD_POST = 'ADD-POST',
    CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';


const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likes: 5
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case CHANGE_TEXT_POST:
            state.newPostText = action.postText;
            return state;

        default:
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});

export const changeTextPostCreator = (text) => ({type: CHANGE_TEXT_POST, postText: text});

export default profileReducer;