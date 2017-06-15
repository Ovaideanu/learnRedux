import axios from 'axios';

export const loadPosts = (posts) => {
    const action = {
        type: 'GET_POSTS',
        payload: posts
    };

    return action;
};

export const getLocalPosts = () => {
    const action = {
        type: 'GET_LOCAL_POSTS',
        payload: JSON.parse(localStorage.getItem('posts'))
    };

    return action;
};

export const getPosts = () => {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function(response) {
                dispatch(loadPosts(response));
            })
            .catch(function(error) {
                throw error;
            })
    }
};

export const deletePost = (postId) => {
    const action = {
        type: 'DELETE_POST',
        payload: postId
    };

    return action;
};

export const openAddPostModal = () => {
    const action = {
        type: 'OPEN_MODAL',
        payload: {
            'modal': 'addPostModal',
            'modalState': true
        }
    };

    return action;
};

export const addPost = () => {

};