import React, {useState} from 'react';
import PostList from "../components/PostList";
import ModalShare from "../components/ModalShare";

import ModalCreate from "../components/UI/modal/ModalCreate";
import Menu from "../components/UI/menu/Menu";
import RightMenu from "../components/UI/menu/RightMenu";
import MyButton from "../components/UI/button/MyButton";


const Acount = () => {

    const [user, setUser] = useState({
        id: 1,
        nick: 'Angel',
        email: 'niki@gmail.com',
        subscriptions: 3,
        photo: "./def.png"
    })

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

    const createBtnClick = () => {
        setModalCreate(false);
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
                    <img src="./forUser2.png"/>
                </div>
                <Menu margtop="450"/>
                <RightMenu margtop="450"/>



            </div>
            <div style={{display: "flex", justifyContent: "center",marginTop:"140px"}}>
                <div style={{fontSize: "40px", fontWeight: "bold"}}>User name</div>
            </div>
            <div style={{display: "flex", justifyContent: "center", fontSize: "20px"}}>
                <div>Descripton</div>
            </div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"15px",marginBottom:"24px"}}>

                <button className="userButon">256 subscriptions</button>
                <button className="userButon">226 subscribers</button>

            </div>

            <div style={{display: "flex", justifyContent: "center", minWidth: "500px"}}>
                <div style={{marginRight:"25px"}}>
                <MyButton  style={{height: "50px", width: "50px"}} onClick={() => {
                    setModalCreate(true);
                }}><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="45" height="45" rx="22.5" fill="#C9F4AA"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9502 11.1375C23.4939 11.1375 23.9346 11.5782 23.9346 12.1219V21.9656H33.7783C34.322 21.9656 34.7627 22.4064 34.7627 22.95C34.7627 23.4937 34.322 23.9344 33.7783 23.9344H23.9346V33.7781C23.9346 34.3218 23.4938 34.7625 22.9502 34.7625C22.4065 34.7625 21.9658 34.3218 21.9658 33.7781V23.9344H12.1221C11.5784 23.9344 11.1377 23.4937 11.1377 22.95C11.1377 22.4064 11.5784 21.9656 12.1221 21.9656H21.9658V12.1219C21.9658 11.5782 22.4065 11.1375 22.9502 11.1375Z" fill="black"/>
                </svg>

                </MyButton></div>

                <div style={{marginRight: "148px",display:"flex",alignItems:"center"}}>


                    <button style={{
                        background: "white",
                        border: "0px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        fontFamily: "Trebuchet MS"
                    }} onClick={myPostsBtnClick}>Posts 122
                    </button>



                </div>
                <div style={{display:"flex"}}>
                    <button style={{
                        background: "white",
                        border: "0px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        fontFamily: "Trebuchet MS"
                    }} onClick={postsSelectedBtnClick}>Selected 12
                    </button>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "1%",}}>

                <ModalCreate modalCreate={modalCreate} user={user} setUser={setUser} setModalCreate={setModalCreate}
                             createBtnClick={createBtnClick}/>
                <div id="postsList">
                    {showMyPosts && (
                        <PostList setModal={setModalShare} list={"my post"}/>
                    )}
                    {showPostsSelected && (
                        <PostList setModal={setModalShare} list={"selected post"}/>
                    )}
                    <ModalShare modal={modalShare} setModal={setModalShare}></ModalShare>
                </div>

            </div>
        </div>
    );
};

export default Acount;