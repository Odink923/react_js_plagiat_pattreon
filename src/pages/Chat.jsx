import React from 'react';
import ChatRightElement from "../components/ChatComponents/ChatRightElement";
import ChatLeftElement from "../components/ChatComponents/ChatLeftElement";
import Menu from "../components/UI/menu/Menu";
import ChatUserMenu from "../components/ChatComponents/ChatUserMenu";

const Chat = () => {

    return (

        <div>
            <Menu/>
            <ChatUserMenu/>
            <div className="categories">

                <div style={{display: "flex", alignItems: "center"}}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.875 4.6875C1.875 3.1342 3.1342 1.875 4.6875 1.875L10.3125 1.875C11.8658 1.875 13.125 3.1342 13.125 4.6875V10.3125C13.125 11.8658 11.8658 13.125 10.3125 13.125H4.6875C3.1342 13.125 1.875 11.8658 1.875 10.3125L1.875 4.6875ZM16.875 4.6875C16.875 3.1342 18.1342 1.875 19.6875 1.875L25.3125 1.875C26.8658 1.875 28.125 3.1342 28.125 4.6875V10.3125C28.125 11.8658 26.8658 13.125 25.3125 13.125H19.6875C18.1342 13.125 16.875 11.8658 16.875 10.3125V4.6875ZM1.875 19.6875C1.875 18.1342 3.1342 16.875 4.6875 16.875H10.3125C11.8658 16.875 13.125 18.1342 13.125 19.6875V25.3125C13.125 26.8658 11.8658 28.125 10.3125 28.125H4.6875C3.1342 28.125 1.875 26.8658 1.875 25.3125L1.875 19.6875ZM16.875 19.6875C16.875 18.1342 18.1342 16.875 19.6875 16.875H25.3125C26.8658 16.875 28.125 18.1342 28.125 19.6875V25.3125C28.125 26.8658 26.8658 28.125 25.3125 28.125H19.6875C18.1342 28.125 16.875 26.8658 16.875 25.3125V19.6875Z"
                            fill="black"/>
                    </svg>
                    <div style={{
                        marginLeft: "18px",
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontFamily: "Trebuchet MS",
                        color: "#3A3A3A"
                    }}>Categories
                    </div>

                </div>
                <div>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.5" cy="22.5" r="22.5" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)"
                                fill="#C9F4AA"/>
                        <path
                            d="M16.5586 27.0587L21.9375 21.6915L27.3164 27.0587L28.9688 25.4063L21.9375 18.3751L14.9063 25.4063L16.5586 27.0587Z"
                            fill="#2C2C2C"/>
                    </svg>

                </div>


            </div>
            <div className="container">
                <div>
                    <div className="chatUserItem">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <svg style={{marginLeft: "25px", marginRight: "15px"}} width="64" height="64"
                                 viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="26" fill="#3A3A3A"/>
                                <g clip-path="url(#clip0_83_559)">
                                    <path
                                        d="M31.9999 5.33333C17.2799 5.33333 5.33325 17.28 5.33325 32C5.33325 46.72 17.2799 58.6667 31.9999 58.6667C46.7199 58.6667 58.6666 46.72 58.6666 32C58.6666 17.28 46.7199 5.33333 31.9999 5.33333ZM31.9999 13.3333C36.4266 13.3333 39.9999 16.9067 39.9999 21.3333C39.9999 25.76 36.4266 29.3333 31.9999 29.3333C27.5733 29.3333 23.9999 25.76 23.9999 21.3333C23.9999 16.9067 27.5733 13.3333 31.9999 13.3333ZM31.9999 51.2C25.3333 51.2 19.4399 47.7867 15.9999 42.6133C16.0799 37.3067 26.6666 34.4 31.9999 34.4C37.3066 34.4 47.9199 37.3067 47.9999 42.6133C44.5599 47.7867 38.6666 51.2 31.9999 51.2Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_83_559">
                                        <rect width="64" height="64" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div>
                                <div style={{fontWeight: "bold"}}>User</div>
                                <div>online</div>
                            </div>
                        </div>
                        <div>
                            <svg style={{marginRight: "25px"}} width="28" height="28" viewBox="0 0 28 28" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11.5625 20.5C16.4985 20.5 20.5 16.4985 20.5 11.5625C20.5 6.62645 16.4985 2.625 11.5625 2.625C6.62645 2.625 2.625 6.62645 2.625 11.5625C2.625 16.4985 6.62645 20.5 11.5625 20.5ZM22.125 11.5625C22.125 17.396 17.396 22.125 11.5625 22.125C5.72899 22.125 1 17.396 1 11.5625C1 5.72899 5.72899 1 11.5625 1C17.396 1 22.125 5.72899 22.125 11.5625Z"
                                      fill="black"/>
                                <path
                                    d="M17.8088 20.081C17.8567 20.146 17.9101 20.2082 17.969 20.267L24.226 26.5241C24.8606 27.1587 25.8895 27.1587 26.5241 26.5241C27.1587 25.8895 27.1587 24.8606 26.5241 24.226L20.267 17.969C20.2082 17.9101 20.146 17.8567 20.081 17.8088C19.4436 18.6767 18.6767 19.4436 17.8088 20.081Z"
                                    fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11.5625 20.5C16.4985 20.5 20.5 16.4985 20.5 11.5625C20.5 6.62645 16.4985 2.625 11.5625 2.625C6.62645 2.625 2.625 6.62645 2.625 11.5625C2.625 16.4985 6.62645 20.5 11.5625 20.5ZM22.125 11.5625C22.125 17.396 17.396 22.125 11.5625 22.125C5.72899 22.125 1 17.396 1 11.5625C1 5.72899 5.72899 1 11.5625 1C17.396 1 22.125 5.72899 22.125 11.5625Z"
                                      stroke="black" stroke-width="2"/>
                                <path
                                    d="M17.8088 20.081C17.8567 20.146 17.9101 20.2082 17.969 20.267L24.226 26.5241C24.8606 27.1587 25.8895 27.1587 26.5241 26.5241C27.1587 25.8895 27.1587 24.8606 26.5241 24.226L20.267 17.969C20.2082 17.9101 20.146 17.8567 20.081 17.8088C19.4436 18.6767 18.6767 19.4436 17.8088 20.081Z"
                                    stroke="black" stroke-width="2"/>
                            </svg>
                            <svg style={{marginRight: "31px"}} width="6" height="26" viewBox="0 0 6 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3" r="3" fill="#3A3A3A"/>
                                <circle cx="3" cy="13" r="3" fill="#3A3A3A"/>
                                <circle cx="3" cy="23" r="3" fill="#3A3A3A"/>
                            </svg>

                        </div>
                    </div>

                    <ChatRightElement/>
                </div>
            </div>

        </div>
    );
};

export default Chat;