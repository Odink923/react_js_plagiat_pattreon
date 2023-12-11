import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import {useDispatch} from "react-redux";
import {setSearchTerm} from "../store/postReducer";

const PostFilter = (/*{searchQuery, setSearchQuery}*/) => {
    const dispatch = useDispatch();
    const [searchTermLocal, setSearchTermLocal] = useState('');

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTermLocal(term);
        dispatch(setSearchTerm(term));}
    return (

        <div>
            <MyInput style={{ marginBottom: 20 }}
                     placeholder="Search"
                     value={searchTermLocal}
                     onChange={handleSearchChange}

            />
        </div>
    );
};

export default PostFilter;