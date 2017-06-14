import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { PostReducer } from '../reducers/postReducer';

export default createStore (
    PostReducer,
    applyMiddleware(thunk)
);