import React, {useState} from 'react';
import PostButton from "../button/PostButton";
import CommentList from "../../CommentList";
import classes from "./PostItem.module.css"


const PostItem = ({setModal,createComment, comments, post}) => {
    const [isShow, setIsShow] = useState(true);
    const toggleShow=()=>{
        setIsShow(!isShow);

    }
    return (
        <div className={classes.post}>
            <div>

                <div >
                <img width="602px" src="./rectangle.png"/>
                </div>
                <div style={{ marginTop:"34px",marginBottom:"15px", fontWeight: "bold"}}> {post.title}</div>
                {isShow?(<div style={{display:"flex", alignItems:"center"}} onClick={toggleShow}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.65 14.3167L20 21.95L12.35 14.3166L10 16.6666L20 26.6666L30 16.6667L27.65 14.3167Z" fill="#2C2C2C"/>
                </svg>
                   <div style={{fontSize:"15px"}}>Show more</div> </div>):( <div >{post.body}</div>)}
                <div className={classes.postButton}>
                <PostButton create={createComment} setModal={setModal}/>
                </div>
                {isShow?(""):  (<hr style={{background:"#A4A4A4",marginBottom:"18px",marginTop:"38px"}}/>)}
                {isShow?(""):(  <CommentList children={"Коментарі"} comments={comments}/>)}

            </div>
        </div>
    );
};

export default PostItem;