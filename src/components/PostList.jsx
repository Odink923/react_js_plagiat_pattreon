import React, {useMemo, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import {Link} from "react-router-dom";
import PostButton from "./UI/button/PostButton";
import CommentList from "./CommentList";
import {useDispatch, useSelector} from "react-redux";
import PostItem from "./PostItem";
import {setSelectedPost} from "../store/postReducer";
import PostFilter from "./PostFilter";

const PostList = ({list, setModal}) => {
    const posts = useSelector((state) => state.post.post);
    const dispatch = useDispatch()
    const [comments, setComment] = useState([
        {id: 1, Name: 'Odin', body:'Very good'},
        {id: 2, Name: 'Admin', body:'It`s the best post'},
        {id: 3, Name: 'Don', body:'Great!'}
    ])

    //search
    const searchTerm = useSelector((state) => state.post.searchTerm);

    const filteredPosts = useMemo(() => {
        return posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [posts, searchTerm]);


    const createComment = (newComment) =>{
        setComment([...comments, newComment])
    }
    //event for transfer post
    const handleLinkClick = (post) => {
        dispatch(setSelectedPost(post));
    };

    return (
        <div>
            <div>

                {filteredPosts.map((post) =>(
                    <div >
                        <Link to={"/autor"}
                              onClick={() => handleLinkClick(post)}>
                            <h1  className="list">

                                <MyButton >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                </MyButton>
                                {list}{post.id}</h1>
                        </Link>
                        <PostItem post={post} comments={comments} createComment={createComment} setModal={setModal}></PostItem>
                    </div>))}
            </div>
        </div>
    );
};

export default PostList;