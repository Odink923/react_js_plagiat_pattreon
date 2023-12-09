import React from 'react';
import MyInput from "./UI/input/MyInput";

const PostFilter = (/*{searchQuery, setSearchQuery}*/) => {
    return (
        <div>
            <MyInput style={{marginBottom: 20}}
                placeholder="Search"
                /*value={searchQuery}
                onChange={e=> setSearchQuery(e.target.value)}*/
            />
        </div>
    );
};

export default PostFilter;