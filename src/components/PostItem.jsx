import React, {useEffect, useState} from 'react';
import PostButton from "./UI/button/PostButton";
import CommentList from "./CommentList";
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../asyncActions/posts";


const PostItem = ({setModal, ...props}) => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.post);

    const [comments, setComment] = useState([
        {id: 1, Name: 'Odin', body:'Very good'},
        {id: 2, Name: 'Admin', body:'It`s the best post'},
        {id: 3, Name: 'Don', body:'Great!'}
    ])
    const createComment = (newComment) =>{
        setComment([...comments, newComment])
    }
    useEffect(() => {
        dispatch(fetchPost());

    }, []);

    return (



                <div >
                    {posts.map((post) =>(
                        <div className="post">
                        <div className="post__content">
                            <strong>{post.id} {post.title}</strong>
                        <img width="800px" src="./def.png"/>
                        <PostButton create={createComment} setModal={setModal}/>
                        <div>{post.body}</div>
                <CommentList children={"Коментарі"} comments={comments}/>
                        </div>
                        </div> ))}

                </div>



    );
};

export default PostItem;