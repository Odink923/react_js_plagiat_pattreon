import React, {useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import {useSelector} from "react-redux";
import PostItem from "../components/UI/postItem/PostItem";
import Menu from "../components/UI/menu/Menu";
import RightMenu from "../components/UI/menu/RightMenu";


const Autor = ({searchResult}) => {
    const [modal, setModal] = useState(false);
    const selectedPost = useSelector((state) => state.post.selectedPost);
    //i need refactor it then
    const [comments, setComment] = useState([
        {id: 1, Name: 'Odin', body: 'Very good'},
        {id: 2, Name: 'Admin', body: 'It`s the best post'},
        {id: 3, Name: 'Don', body: 'Great!'}
    ])
    const createComment = (newComment) => {
        setComment([...comments, newComment])
    }
    return (

        <div style={{fontFamily: "Trebuchet MS"}}>
            <div style={{height: "300px", marginTop: "30px"}}>
                <div className="container1">
                    <div className="overlay">
                        <svg width="250" height="250" viewBox="0 0 250 250" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="125" cy="125" r="102.062" fill="#3A3A3A" stroke="black"/>
                            <g clip-path="url(#clip0_261_312)">
                                <path
                                    d="M125 20.8333C67.5002 20.8333 20.8335 67.5 20.8335 125C20.8335 182.5 67.5002 229.167 125 229.167C182.5 229.167 229.167 182.5 229.167 125C229.167 67.5 182.5 20.8333 125 20.8333ZM125 52.0833C142.292 52.0833 156.25 66.0416 156.25 83.3333C156.25 100.625 142.292 114.583 125 114.583C107.708 114.583 93.7502 100.625 93.7502 83.3333C93.7502 66.0416 107.708 52.0833 125 52.0833ZM125 200C98.9585 200 75.9377 186.667 62.5002 166.458C62.8127 145.729 104.167 134.375 125 134.375C145.729 134.375 187.188 145.729 187.5 166.458C174.063 186.667 151.042 200 125 200Z"
                                    fill="#F2F2F2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_261_312">
                                    <rect width="250" height="250" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <img src="./fonUser.png"/>
                </div>
                <Menu margtop="450"/>
                <RightMenu margtop="450"/>
                <div style={{display: "flex", justifyContent: "center",marginTop:"140px"}}>
                    <div style={{fontSize: "40px", fontWeight: "bold"}}>User name</div>
                </div>
                <div style={{display: "flex", justifyContent: "center", fontSize: "20px"}}>
                    <div>Descripton</div>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"15px",marginBottom:"24px"}}>

                    <button style={{background:"#F2F2F2"}} className="userButon">256 subscriptions</button>
                    <button style={{background:"#F2F2F2"}} className="userButon">226 subscribers</button>
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>

                    <button style={{width:"250px",fontWeight:"bold"}} className="userButon">Follow</button>
                </div>




            </div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"350px"}}>
            <div style={{marginBottom:"50px" }} id="lol">
                <div className="divUserIconPostList">
                    <MyButton>
                        <div style={{backgroundColor: "#F2F2F2"}}>
                            <svg width="50" height="50" viewBox="0 0 64 64" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="26" fill="#3A3A3A"/>
                                <g clip-path="url(#clip0_10_905)">
                                    <path
                                        d="M32 5.33334C17.28 5.33334 5.33337 17.28 5.33337 32C5.33337 46.72 17.28 58.6667 32 58.6667C46.72 58.6667 58.6667 46.72 58.6667 32C58.6667 17.28 46.72 5.33334 32 5.33334ZM32 13.3333C36.4267 13.3333 40 16.9067 40 21.3333C40 25.76 36.4267 29.3333 32 29.3333C27.5734 29.3333 24 25.76 24 21.3333C24 16.9067 27.5734 13.3333 32 13.3333ZM32 51.2C25.3334 51.2 19.44 47.7867 16 42.6133C16.08 37.3067 26.6667 34.4 32 34.4C37.3067 34.4 47.92 37.3067 48 42.6133C44.56 47.7867 38.6667 51.2 32 51.2Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_10_905">
                                        <rect width="64" height="64" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </MyButton>
                    <div style={{fontSize: "20px", fontFamily: "Trebuchet MS"}}>User name{selectedPost.id}</div>
                </div>

                <div style={{marginTop: 40}}>
                    <PostItem post={selectedPost} comments={comments} createComment={createComment} setModal={setModal}/>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Autor;