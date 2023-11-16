import React from 'react';
import PostItem from "./PostItem";

const PostAutorList = ({posts, setModal}) => {
    return (
        <div>

            {posts.map((post)=>
                <PostItem post={post} setModal={setModal}  key={post.id}/>
            )}
        </div>
    );
};

export default PostAutorList;