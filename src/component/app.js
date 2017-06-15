import React from 'react';
import { bindActionCreators } from 'redux';
import { getPosts, getLocalPosts, deletePost, openAddPostModal} from '../actions/actions';
import { connect } from 'react-redux';

import { Post } from './post';
import { Button } from './button';

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        let posts = [],
            localPosts = localStorage.getItem('posts') ? true : false;

        this.props.posts.map((post, index) => {
            posts.push(<Post key={index} post={post} deletePost={this.props.deletePost}/>);
        });

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">
                            <h1>Blog</h1>
                        </div>
                        <div className="col-xs-6 text-right get-posts">
                            <Button cssClass="btn btn-success"
                                    text="Add post"
                                    action={this.props.openAddPostModal}/>
                            <Button cssClass="btn btn-info"
                                    localPosts={localPosts}
                                    text="Load posts"
                                    action={this.props.getLocalPosts}/>
                            <Button cssClass="btn btn-info"
                                    localPosts={!localPosts}
                                    text="Load posts"
                                    action={this.props.getPosts}/>
                        </div>
                    </div>
                    <div className="posts-container row">
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);

    return {
        posts: state.posts

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
            getPosts: getPosts,
            getLocalPosts: getLocalPosts,
            openAddPostModal: openAddPostModal,
            deletePost: deletePost
        },
        dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);