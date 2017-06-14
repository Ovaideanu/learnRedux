import React from 'react';

export const Post = (props) => {

    return (
		<div className="col-xs-12 post">
			<div className="row">
				<div className="col-xs-12">
					<p className="post-title">{props.post.title}</p>
				</div>
				<div className="col-xs-12">
					<span className="post-body">{props.post.body}</span>
				</div>
				<div className="col-xs-6 col-sm-6 col-md-6 text-left">
					<button
						data-post-id={props.post.id}
						className="btn btn-warning">
						Edit post
					</button>
				</div>
				<div className="col-xs-6 col-sm-6 col-md-6 text-right">
					<button
						data-post-id={props.post.id}
						className="btn btn-danger"
						onClick={() => props.deletePost(props.post.id)}>
						Delete post
					</button>
				</div>
			</div>
		</div>
    );
}