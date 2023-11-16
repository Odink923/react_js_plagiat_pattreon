import React, {useState} from 'react';
import PostList from "../components/PostList";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import UserButton from "../components/UI/button/UserButton";
import PostAutorList from "../components/PostAutorList";

const Autor = ({searchResult, ...posts}) => {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <PostAutorList  posts={searchResult} setModal={setModal}/>

        </div>
    );
};

export default Autor;