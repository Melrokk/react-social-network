let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello, hour are y?', likes: 10},
            {id: 2, message: 'Its my first post!', likes: 22},
            {id: 3, message: 'Hello, hour are y? Its my first post!', likes: 3},
            {id: 4, message: 'Its my first post! Hello, hour are y?', likes: 15},
            {id: 5, message: 'Search for the keywords to learn more about each warning.', likes: 0},
        ]
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: "Hi, how are you?", owner: "user.id"},
            {id: 2, message: "Im glad to see you!", owner: "user.id"},
            {id: 3, message: "Either with meaningful text", owner: "me"},
            {id: 4, message: "Sam Green Either with meaningful text", owner: "me"},
            {id: 5, message: "Hi, how are you? Freed", owner: "user.id"},
            {id: 4, message: "Img elements must have an alt prop, either with meaningful text", owner: "me"},
        ],
        dialogsData: [
            {id: 1, name: "Egor", imgUrl:"https://www.kindpng.com/userimgs/710.jpg"},
            {id: 2, name: "Max", imgUrl:"https://www.kindpng.com/userimgs/188.jpg"},
            {id: 3, name: "Serge", imgUrl:"https://www.kindpng.com/userimgs/7555.jpg"},
            {id: 4, name: "An Lee", imgUrl:"https://www.kindpng.com/userimgs/760.jpg"},
            {id: 5, name: "Sara Bullak", imgUrl:"https://www.kindpng.com/userimgs/752.jpg"}
        ]
    },
    siteBar: {
        friends: [
            {id: 1, name: "Egor", imgUrl:"https://www.kindpng.com/userimgs/710.jpg"},
            {id: 2, name: "Max", imgUrl:"https://www.kindpng.com/userimgs/188.jpg"},
            {id: 3, name: "Serge", imgUrl:"https://www.kindpng.com/userimgs/7555.jpg"},
        ]
    }
};

export default state;