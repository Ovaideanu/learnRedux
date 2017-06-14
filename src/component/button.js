import React from 'react';

export const Button = (props) => {
    return (
        <button
            className={ props.localPosts ? "btn btn-info" : "btn btn-info hidden"}
            onClick={() => props.getPosts()}>
            Load posts
        </button>
    )
}