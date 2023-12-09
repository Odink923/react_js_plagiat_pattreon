import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import {Link} from "react-router-dom";
import PostButton from "./UI/button/PostButton";
import CommentList from "./CommentList";
import {useSelector} from "react-redux";

const PostList = ({list, setModal}) => {
    const posts = useSelector((state) => state.post.post);

    const [comments, setComment] = useState([
        {id: 1, Name: 'Odin', body:'Very good'},
        {id: 2, Name: 'Admin', body:'It`s the best post'},
        {id: 3, Name: 'Don', body:'Great!'}
    ])
    const createComment = (newComment) =>{
        setComment([...comments, newComment])
    }


    return (
        <div>


            <div >

                {posts.map((post) =>(
                    <div >
                        <Link to={"/autor"}>
                            <h1  className="list">

                                <MyButton >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                </MyButton>
                                {list}{post.id}</h1>
                        </Link>
                    <div className="post">

                        <div className="post__content">
                            <strong> {post.title}</strong>
                            <img width="800px" src="./def.png"/>
                            <PostButton create={createComment} setModal={setModal}/>
                            <div>{post.body}</div>
                            <CommentList children={"Коментарі"} comments={comments}/>
                        </div>
                    </div>
                    </div>))}

            </div>
        </div>
    );
};

export default PostList;