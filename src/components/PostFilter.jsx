import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setSearchTerm} from "../store/postReducer";
import SearchInput from "./UI/input/SearchInput";

const PostFilter = (/*{searchQuery, setSearchQuery}*/) => {
    const dispatch = useDispatch();
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTermLocal(term);
        dispatch(setSearchTerm(term));
    }
    return (
        <div>
            <SearchInput style={{fontSize: "20px", fontFamily: "Trebuchet MS"}}
                         value={searchTermLocal}
                         onChange={handleSearchChange}/>
        </div>
    );
};

export default PostFilter;