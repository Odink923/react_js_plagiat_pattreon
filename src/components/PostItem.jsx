import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import ComentForm from "./UI/form/ComentForm";
import PostButton from "./UI/button/PostButton";
import CommentItem from "./CommentItem";
import CommentList from "./CommentList";


const PostItem = ({setModal, ...props}) => {

    const [comments, setComment] = useState([
        {id: 1, Name: 'Odin', body:'Very good'},
        {id: 2, Name: 'Admin', body:'It`s the best post'},
        {id: 3, Name: 'Don', body:'Great!'}
    ])
    const createComment = (newComment) =>{
        setComment([...comments, newComment])
    }
    return (

            <div className="post">

                <div className="post__content">

                    <strong>{props.post.id} {props.post.title}</strong>
                    <img width="800px" src="./def.png"/>

                    <PostButton create={createComment} setModal={setModal}/>
                    <div>{props.post.body}</div>
                    <CommentList children={"Коментарі"} comments={comments}/>

                </div>
            </div>


    );
};

export default PostItem;