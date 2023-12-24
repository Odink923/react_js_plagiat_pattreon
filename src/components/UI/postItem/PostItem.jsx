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
                {isShow?(<div style={{display:"flex", alignItems:"center",marginRight:"40px", cursor:"pointer"}} onClick={toggleShow}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.65 14.3167L20 21.95L12.35 14.3166L10 16.6666L20 26.6666L30 16.6667L27.65 14.3167Z" fill="#2C2C2C"/>
                </svg>
                   <div style={{fontSize:"15px"}}>Show more</div> </div>):( <div >{post.body}</div>)}
                <div className={classes.postButton}>
                <PostButton create={createComment} setModal={setModal}/>
                </div>
                {isShow?(""):  (<hr style={{background:"#A4A4A4",marginBottom:"18px",marginTop:"38px"}}/>)}
                {isShow?(""):(  <CommentList  children={"Коментарі"} comments={comments}/>)}
                {isShow?(""):( <div style={{display:"flex", alignItems:"center",marginRight:"40px", cursor:"pointer"}} onClick={toggleShow}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_184_265)">
                            <path d="M12.35 25.6833L20 18.05L27.65 25.6833L30 23.3333L20 13.3334L10 23.3333L12.35 25.6833Z" fill="#2C2C2C"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_184_265">
                                <rect width="40" height="40" fill="white" transform="matrix(1 0 0 -1 0 40)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <div style={{fontSize:"15px"}}>Show less</div>
                </div> )}
            </div>
        </div>
    );
};

export default PostItem;