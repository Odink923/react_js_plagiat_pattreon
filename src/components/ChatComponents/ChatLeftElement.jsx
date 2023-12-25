import React from 'react';
import MyButton from "../UI/button/MyButton";
import {fetchMessages} from "../../asyncActions/messages";
import {useDispatch} from "react-redux";

const ChatLeftElement = ({children}) => {
    const dispatch = useDispatch();
    return (
        <div style={{display: "flex", alignItems: "center", margin: 10, fontFamily:"Trebuchet MS"}}>
            <MyButton onClick={() => dispatch(fetchMessages())}>
                <div style={{background:"#F2F2F2"}}>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="26" fill="#3A3A3A"/>
                        <g clip-path="url(#clip0_83_969)">
                            <path d="M31.9999 5.33333C17.2799 5.33333 5.33325 17.28 5.33325 32C5.33325 46.72 17.2799 58.6667 31.9999 58.6667C46.7199 58.6667 58.6666 46.72 58.6666 32C58.6666 17.28 46.7199 5.33333 31.9999 5.33333ZM31.9999 13.3333C36.4266 13.3333 39.9999 16.9067 39.9999 21.3333C39.9999 25.76 36.4266 29.3333 31.9999 29.3333C27.5733 29.3333 23.9999 25.76 23.9999 21.3333C23.9999 16.9067 27.5733 13.3333 31.9999 13.3333ZM31.9999 51.2C25.3333 51.2 19.4399 47.7867 15.9999 42.6133C16.0799 37.3067 26.6666 34.4 31.9999 34.4C37.3066 34.4 47.9199 37.3067 47.9999 42.6133C44.5599 47.7867 38.6666 51.2 31.9999 51.2Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_83_969">
                                <rect width="64" height="64" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </MyButton>
            <div>
            <h2>{children}</h2>
            <div>Online</div>
            </div>
        </div>
    );
};

export default ChatLeftElement;