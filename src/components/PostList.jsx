import React, {useMemo, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import {Link} from "react-router-dom";
import PostButton from "./UI/button/PostButton";
import CommentList from "./CommentList";
import {useDispatch, useSelector} from "react-redux";
import PostItem from "./UI/postItem/PostItem";
import {setSelectedPost} from "../store/postReducer";
import PostFilter from "./PostFilter";

const PostList = ({list, setModal}) => {
    const posts = useSelector((state) => state.post.post);
    const dispatch = useDispatch()
    const [comments, setComment] = useState([
        {id: 1, Name: 'Odin', body: 'Very good'},
        {id: 2, Name: 'Admin', body: 'It`s the best post'},
        {id: 3, Name: 'Don', body: 'Great!'}
    ])

    //search
    const searchTerm = useSelector((state) => state.post.searchTerm);

    const filteredPosts = useMemo(() => {
        return posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [posts, searchTerm]);


    const createComment = (newComment) => {
        setComment([...comments, newComment])
    }
    //event for transfer post
    const handleLinkClick = (post) => {
        dispatch(setSelectedPost(post));
    };

    return (
        <div>
            <div>
                {filteredPosts.map((post) => (
                    <div style={{marginBottom:"50px"}} id="lol">
                        <Link style={{textDecoration: "none"}} to={"/autor"}
                              onClick={() => handleLinkClick(post)}>
                            <div className="divUserIconPostList">
                                <MyButton>
                                    <div style={{backgroundColor: "#F2F2F2"}}>
                                        <svg width="50" height="50" viewBox="0 0 64 64" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="32" cy="32" r="26" fill="#3A3A3A"/>
                                            <g clip-path="url(#clip0_10_905)">
                                                <path
                                                    d="M32 5.33334C17.28 5.33334 5.33337 17.28 5.33337 32C5.33337 46.72 17.28 58.6667 32 58.6667C46.72 58.6667 58.6667 46.72 58.6667 32C58.6667 17.28 46.72 5.33334 32 5.33334ZM32 13.3333C36.4267 13.3333 40 16.9067 40 21.3333C40 25.76 36.4267 29.3333 32 29.3333C27.5734 29.3333 24 25.76 24 21.3333C24 16.9067 27.5734 13.3333 32 13.3333ZM32 51.2C25.3334 51.2 19.44 47.7867 16 42.6133C16.08 37.3067 26.6667 34.4 32 34.4C37.3067 34.4 47.92 37.3067 48 42.6133C44.56 47.7867 38.6667 51.2 32 51.2Z"
                                                    fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_10_905">
                                                    <rect width="64" height="64" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </MyButton>
                                <div style={{fontSize: "20px", fontFamily: "Trebuchet MS"}}>{list}{post.id}</div>
                            </div>
                        </Link>
                        <PostItem  post={post} comments={comments} createComment={createComment}
                                  setModal={setModal}></PostItem>
                    </div>))}
            </div>
        </div>
    );
};

export default PostList;