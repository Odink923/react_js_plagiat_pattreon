import React from 'react';
import ChatLeftElement from "./ChatLeftElement";
import classes from "./ChatUserMenu.module.css"

const ChatUserMenu = () => {
    return (
        <div className={classes.userMenu}>
            <ChatLeftElement>lol 1</ChatLeftElement>
            <ChatLeftElement>lol 2</ChatLeftElement>
            <ChatLeftElement>lol 3</ChatLeftElement>
            <ChatLeftElement>lol 4</ChatLeftElement>
            <ChatLeftElement>lol 5</ChatLeftElement>
        </div>
    );
};

export default ChatUserMenu;