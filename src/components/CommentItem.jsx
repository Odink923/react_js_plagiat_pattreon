import React from 'react';


const CommentItem = ({...props}) => {
    return (
        <div>
            <p style={{fontSize: 25, marginTop:10}}>{props.comment.Name}</p>
            <p style={{fontSize: 20}}>{props.comment.body}</p>
        </div>
    );
};

export default CommentItem;