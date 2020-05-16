let initialState = {
    friends: [
        {id: 1, name: "Egor", imgUrl: "https://www.kindpng.com/userimgs/710.jpg"},
        {id: 2, name: "Max", imgUrl: "https://www.kindpng.com/userimgs/188.jpg"},
        {id: 3, name: "Serge", imgUrl: "https://www.kindpng.com/userimgs/7555.jpg"},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;