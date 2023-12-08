import React, {useState} from 'react';
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