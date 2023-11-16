import React from 'react';
import PostItem from "./PostItem";
import CommentItem from "./CommentItem";

const CommentList = ({comments, children}) => {
    return (
        <div>
            <h5 style={{marginTop: 20}} >{children}</h5>
            {
                comments.map((comment)=>
                <CommentItem comment={comment} key={comment.id}
                />)
           }

        </div>
    );
};

export default CommentList;