import React, {useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import {useSelector} from "react-redux";
import PostItem from "../components/UI/postItem/PostItem";




const Autor = ({searchResult}) => {
    const [modal, setModal] = useState(false);
    const selectedPost = useSelector((state) => state.post.selectedPost);
    //i need refactor it then
    const [comments, setComment] = useState([
        {id: 1, Name: 'Odin', body:'Very good'},
        {id: 2, Name: 'Admin', body:'It`s the best post'},
        {id: 3, Name: 'Don', body:'Great!'}
    ])
    const createComment = (newComment) =>{
        setComment([...comments, newComment])
    }
    return (
        <div>

            <div style={{display:"flex", justifyContent: "center"}}>
                <MyButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </MyButton>
            </div>
            <div style={{display: "flex", justifyContent: "center", fontSize: "27px"}}>
                <strong>User{selectedPost.id}</strong>
            </div>
            <div style={{display:"flex",justifyContent: "center"}}>
                <div>
                    <h3>Descriprion:</h3>
                    <div style={{width: "50%"}}>
                        <p>hfhfhgfhhgfhhfhfhffghffhhghgffhjnknjknjknjknknjnnkn</p>
                        <li>instagram:     lfdfdllf</li>
                        <li>telegram:     lfdfdllf</li>
                        <li>tiktok:     lfdfdllf</li>
                    </div>
                </div>
            </div>
            <div style={{marginTop:40}}>
            <PostItem post={selectedPost} comments={comments} createComment={createComment} setModal={setModal}/>
            </div>

        </div>
    );
};

export default Autor;