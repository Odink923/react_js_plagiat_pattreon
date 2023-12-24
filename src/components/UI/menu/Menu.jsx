import React from 'react';
import classes from "./Menu.module.css"
import MyButton from "../button/MyButton";
const Menu = () => {
    return (
        <div className={classes.menu}>
            <div className={classes.menu_content}>
                <div style={{marginLeft: "28px", marginTop: "12px", marginBottom: "23px"}}>
                    <MyButton>
                        <div className={classes.forSvg}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="26" fill="#3A3A3A"/>
                                <g clip-path="url(#clip0_10_1097)">
                                    <path
                                        d="M32 5.33333C17.28 5.33333 5.33334 17.28 5.33334 32C5.33334 46.72 17.28 58.6667 32 58.6667C46.72 58.6667 58.6667 46.72 58.6667 32C58.6667 17.28 46.72 5.33333 32 5.33333ZM32 13.3333C36.4267 13.3333 40 16.9067 40 21.3333C40 25.76 36.4267 29.3333 32 29.3333C27.5733 29.3333 24 25.76 24 21.3333C24 16.9067 27.5733 13.3333 32 13.3333ZM32 51.2C25.3333 51.2 19.44 47.7867 16 42.6133C16.08 37.3067 26.6667 34.4 32 34.4C37.3067 34.4 47.92 37.3067 48 42.6133C44.56 47.7867 38.6667 51.2 32 51.2Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_10_1097">
                                        <rect width="64" height="64" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            Your name
                        </div>
                    </MyButton>
                </div>
                <hr style={{borderColor: "#C9F4AA"}}/>
                <div style={{marginTop: "23px", marginLeft: "34px"}}>

                    <MyButton>
                        <div className={classes.forSvg}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.875 9.375C16.875 12.4816 14.3566 15 11.25 15C8.1434 15 5.625 12.4816 5.625 9.375C5.625 6.2684 8.1434 3.75 11.25 3.75C14.3566 3.75 16.875 6.2684 16.875 9.375Z"
                                    fill="#3A3A3A"/>
                                <path
                                    d="M0 24.375C0 26.25 1.875 26.25 1.875 26.25H20.625C20.625 26.25 22.5 26.25 22.5 24.375C22.5 22.5 20.625 16.875 11.25 16.875C1.875 16.875 0 22.5 0 24.375Z"
                                    fill="#3A3A3A"/>
                                <path
                                    d="M25.3125 9.20742C27.9131 6.53438 34.4146 11.2122 25.3125 17.2266C16.2104 11.2122 22.7119 6.53438 25.3125 9.20742Z"
                                    fill="#3A3A3A"/>
                            </svg>
                            <div style={{marginLeft: "15px"}}>Folovers</div>
                        </div>
                    </MyButton>
                    <MyButton>

                        lol3</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Menu;