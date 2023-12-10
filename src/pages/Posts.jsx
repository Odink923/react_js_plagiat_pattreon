import React, {useEffect, useMemo, useState} from 'react';
import PostList from "../components/PostList";
import ModalShare from "../components/ModalShare";
import {fetchPost} from "../asyncActions/posts";
import {useDispatch, useSelector} from "react-redux";
import {addManyPost, clearArray, setCurrentPage} from "../store/postReducer";
import Pagination from "../components/Pagination";

function Posts() {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.post.currentPage);


    // const [posts, setPosts] = useState([
    //     {id: 1, title: 'First', body:'Is a good post'},
    //     {id: 2, title: 'Second', body:'Is a good post'},
    //     {id: 3, title: 'Third', body:'Is a good post'}
    // ])
    //const [searchQuery, setSearchQuery] = useState('')

    // const searchResult = useMemo(() =>{
    //     return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    // },[posts,searchQuery])
    const handlePageChange = (newPage) => {
        dispatch(setCurrentPage(newPage));
        dispatch(fetchPost(newPage));
    };
    const [modal, setModal] = useState(false);
    return (
        <div className="App">

            <PostList /* posts={searchResult}*/ setModal={setModal}  list={"User"}/>
            <ModalShare modal={modal} setModal={setModal}></ModalShare>
            <Pagination
                currentPage={currentPage}
                totalPageCount={10}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Posts;
