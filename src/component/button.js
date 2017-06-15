import React from 'react';

export const Button = (props) => {
    let visibility = props.localPosts === false ? " hidden" : "";

    return (
        <button
            className={ props.cssClass + visibility}
            onClick={() => props.action()}>
            {props.text}
        </button>
    )
}