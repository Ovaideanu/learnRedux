const initialState = {
    modalState: false,
    modalToOpen: '',
    posts: [],
};

export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LOCAL_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'GET_POSTS':

            localStorage.setItem('posts', JSON.stringify(action.payload.data));

            return {
                ...state,
                posts: action.payload.data
            };
        case 'DELETE_POST':
            let newPosts = Object.assign([], state.posts);

            newPosts.map((post, index) => {
                if (post.id === action.payload) {
                    newPosts.splice(index, 1);
                }
            });

            localStorage.setItem('posts', JSON.stringify(newPosts));

            return {
                ...state,
                posts: newPosts
            };
        default:
            return state;
    }
};
