import React from 'react';
import CommentItem from "./CommentItem";

const CommentList = ({comments, children}) => {
    return (
        <div style={{fontFamily:"Trebuchet MS"}}>
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