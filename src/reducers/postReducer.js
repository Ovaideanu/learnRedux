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

            // TODO Delete the post
            console.log(action);

            return {
                ...state,
                posts: state.posts
            };
        default:
            return state;
    }
};
