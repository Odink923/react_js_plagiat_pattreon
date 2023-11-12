import React, {useState} from 'react';
import PostList from "../components/PostList";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import UserButton from "../components/UI/button/UserButton";

const Autor = ({searchResult, ...posts}) => {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <PostList  posts={searchResult} setModal={setModal}  list={"User1"}/>

        </div>
    );
};

export default Autor;