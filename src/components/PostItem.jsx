import React from 'react';
import PostButton from "./UI/button/PostButton";
import CommentList from "./CommentList";

const PostItem = ({setModal,createComment, comments, post}) => {
    return (
        <div className="post">

            <div className="post__content">
                <strong> {post.title}</strong>
                <img width="800px" src="./def.png"/>
                <PostButton create={createComment} setModal={setModal}/>
                <div>{post.body}</div>
                <CommentList children={"Коментарі"} comments={comments}/>
            </div>
        </div>
    );
};

export default PostItem;