import React, { useMemo, useState} from 'react';
import PostList from "../components/PostList";
import ModalShare from "../components/ModalShare";

function Posts() {

    // const [posts, setPosts] = useState([
    //     {id: 1, title: 'First', body:'Is a good post'},
    //     {id: 2, title: 'Second', body:'Is a good post'},
    //     {id: 3, title: 'Third', body:'Is a good post'}
    // ])
    const [searchQuery, setSearchQuery] = useState('')

    // const searchResult = useMemo(() =>{
    //     return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    // },[posts,searchQuery])

    const [modal, setModal] = useState(false);
    return (
        <div className="App">




            <PostList /* posts={searchResult}*/ setModal={setModal}  list={"User1"}/>
            <PostList /* posts={searchResult}*/ setModal={setModal}  list={"User2"}/>
            <ModalShare modal={modal} setModal={setModal}></ModalShare>


        </div>
    );
}

export default Posts;
