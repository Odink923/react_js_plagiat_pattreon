import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import ChatRightElement from "../components/ChatRightElement";
import ChatLeftElement from "../components/ChatLeftElement";

const Chat = () => {
    return (
        <div className="container">
        <div className="left-element">
           <ChatLeftElement children="lol1"/>
           <ChatLeftElement children="lol2"/>
           <ChatLeftElement children="lol3"/>
           <ChatLeftElement children="lol4"/>

        </div>
            <div className="vertical-line"></div>
        <div className="right-element">
            <ChatRightElement/>

        </div>
        </div>
    );
};

export default Chat;