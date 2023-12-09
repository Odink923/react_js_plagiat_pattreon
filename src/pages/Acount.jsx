import React, {useState} from 'react';
import PostList from "../components/PostList";
import ModalShare from "../components/ModalShare";

import ModalCreate from "../components/UI/modal/ModalCreate";


const Acount = () => {

    const [user, setUser] = useState({id: 1, nick: 'Angel', email:'niki@gmail.com', subscriptions: 3, photo:"./def.png"})

    // const [postsSelected, setPostsSelected] = useState([
    //     {id: 1, title: '#First', body:'Is a good post'},
    //     {id: 2, title: 'Second', body:'Is a good post'},
    //     {id: 3, title: 'Third', body:'Is a good post'}
    // ])
    //
    // const [myPosts, setMyPosts] = useState([
    //     {id: 1, title: 'MyFirst', body:'MyIs a good post'},
    //     {id: 2, title: 'MySecond', body:'MyIs a good post'},
    //     {id: 3, title: 'MyThird', body:'MyIs a good post'}
    // ])
    const [modalShare, setModalShare] = useState(false);

    const [showMyPosts, setShowMyPosts] = useState(false);

    const myPostsBtnClick = () => {
        setShowMyPosts(true);
        setShowPostsSelected(false);
    };

    const [showPostsSelected, setShowPostsSelected] = useState(true);

    const postsSelectedBtnClick = () => {
        setShowPostsSelected(true);
        setShowMyPosts(false);
    };

    const [modalCreate, setModalCreate] = useState(false);

    const createBtnClick = () =>{
        setModalCreate(false);
    }




    return (
        <div >

            <div style={{display:"flex", justifyContent: "center"}}>
                <div  style={{display: "flex"}}>
                    <div>
                        <img width="300px" src={user.photo} style={{marginTop:"8%", border: "3px solid #ccc" }}/>
                    </div>
                    <div style={{marginLeft:"400px"}}>
                        <div style={{float: "right",marginTop:"50%", marginBottom:"220%"}}>
                            <svg onClick={() => setModalShare(true)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                 className="bi bi-share" viewBox="0 0 16 16">
                                <path
                                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                            <ModalShare modal={modalShare} setModal={setModalShare}></ModalShare>
                        </div>
                        <div>
                            <button style={{float: "right"}}>Edit profil</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div style={{display: "flex", minWidth: "500px"}}>
                    <div style={{marginLeft:"25%"}}>
                        <div>
                            <h1 style={{marginTop:"10%", marginBottom:"20%"}}>{user.nick}</h1>
                        </div>
                        <div>
                            <button>{user.subscriptions} subscriptions</button>
                        </div>
                    </div>
                    <div style={{marginLeft:"10%", marginTop:"3%"}}>
                        <textarea style={{width:"170%"}} name="textarea-description" defaultValue="Description" maxLength="200px" />
                    </div>
                </div>
            </div>

            <div style={{display: "flex", marginTop:"6%", minWidth: "500px"}}>
                <button style={{width:"50%"}} onClick={myPostsBtnClick}>My posts</button>
                <button style={{width:"50%"}} onClick={postsSelectedBtnClick}>Selected</button>
            </div>

            <div style={{display: "flex", justifyContent:"center", marginTop:"1%", }}>
                <button style={{height:"50px", width:"50px"}} onClick={()=>{setModalCreate(true);}}>+</button>

                <ModalCreate modalCreate={modalCreate} user={user} setUser={setUser} setModalCreate={setModalCreate} createBtnClick={createBtnClick}/>

                <div  id="postsList">
                    {showMyPosts && (
                        <PostList   setModal={setModalShare}  list={"my post"}/>
                    )}
                    {showPostsSelected && (
                        <PostList  setModal={setModalShare}  list={"selected post"}/>
                    )}
                    <ModalShare modal={modalShare} setModal={setModalShare}></ModalShare>
                </div>
                <button style={{height:"50px", width:"50px"}}>^</button>
            </div>
        </div>
    );
};

export default Acount;