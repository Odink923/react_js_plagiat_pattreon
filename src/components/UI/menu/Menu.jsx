import React, {useEffect, useState} from 'react';
import classes from "./Menu.module.css"
import MyButton from "../button/MyButton";
const Menu = ({margtop}) => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop >= margtop) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${classes.menu} ${isFixed ? classes.fixedMenu : ''}`}>
            <div className={classes.menu_content} id="fixed-element">
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
                            <div style={{marginLeft:"15px", fontWeight:"bold"}}>
                            Your name
                            </div>
                        </div>
                    </MyButton>
                </div>
                <hr style={{borderColor: "#C9F4AA"}}/>
                <div style={{marginTop: "23px", marginLeft: "34px"}}>
                    <div>
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
                            <div style={{marginLeft: "15px"}}>
                                <div >Folovers</div>
                            </div>
                        </div>
                    </MyButton>
                    </div>
                    <div style={{marginTop:"20px"}}>
                    <MyButton >
                        <div className={classes.forSvg}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 30C26.6421 30 30 26.6421 30 22.5C30 18.3579 26.6421 15 22.5 15C18.3579 15 15 18.3579 15 22.5C15 26.6421 18.3579 30 22.5 30ZM26.0973 20.3727L23.236 25.1415C22.6981 26.038 21.4608 26.1903 20.7215 25.451L19.0638 23.7933C18.6454 23.3749 18.6454 22.6965 19.0638 22.2781C19.4822 21.8597 20.1606 21.8597 20.579 22.2781L21.7516 23.4506L24.2598 19.2702C24.5643 18.7628 25.2224 18.5982 25.7298 18.9027C26.2372 19.2071 26.4018 19.8653 26.0973 20.3727Z" fill="#3A3A3A"/>
                                <path d="M19.2857 6.42857C19.2857 9.97897 16.4075 12.8571 12.8571 12.8571C9.30674 12.8571 6.42857 9.97897 6.42857 6.42857C6.42857 2.87817 9.30674 0 12.8571 0C16.4075 0 19.2857 2.87817 19.2857 6.42857Z" fill="#3A3A3A"/>
                                <path d="M0 23.5714C0 25.7143 2.14286 25.7143 2.14286 25.7143H13.4058C13.0505 24.7089 12.8571 23.627 12.8571 22.5C12.8571 19.5993 14.1379 16.9977 16.1648 15.23C15.1652 15.0818 14.0657 15 12.8571 15C2.14286 15 0 21.4286 0 23.5714Z" fill="#3A3A3A"/>
                            </svg>
                            <div style={{marginLeft: "15px"}}>
                                <div >Subscriptions</div>
                            </div>
                        </div>
                        </MyButton>
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <MyButton >
                            <div className={classes.forSvg}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30 15C30 22.2487 23.2843 28.125 15 28.125C13.4686 28.125 11.9908 27.9242 10.5991 27.551C9.50434 28.1058 6.98951 29.172 2.75948 29.8645C2.38632 29.9256 2.10069 29.5352 2.24809 29.187C2.91203 27.6186 3.51095 25.5303 3.69335 23.6251C1.39324 21.3185 0 18.3016 0 15C0 7.75126 6.71573 1.875 15 1.875C23.2843 1.875 30 7.75126 30 15ZM8.4375 9.375C7.91973 9.375 7.5 9.79473 7.5 10.3125C7.5 10.8303 7.91973 11.25 8.4375 11.25H21.5625C22.0803 11.25 22.5 10.8303 22.5 10.3125C22.5 9.79473 22.0803 9.375 21.5625 9.375H8.4375ZM8.4375 14.0625C7.91973 14.0625 7.5 14.4822 7.5 15C7.5 15.5178 7.91973 15.9375 8.4375 15.9375H21.5625C22.0803 15.9375 22.5 15.5178 22.5 15C22.5 14.4822 22.0803 14.0625 21.5625 14.0625H8.4375ZM8.4375 18.75C7.91973 18.75 7.5 19.1697 7.5 19.6875C7.5 20.2053 7.91973 20.625 8.4375 20.625H15.9375C16.4553 20.625 16.875 20.2053 16.875 19.6875C16.875 19.1697 16.4553 18.75 15.9375 18.75H8.4375Z" fill="#3A3A3A"/>
                                </svg>

                                <div style={{marginLeft: "15px"}}>
                                    <div >Chat</div>
                                </div>
                            </div>
                        </MyButton>
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <MyButton >
                            <div className={classes.forSvg}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 7.5C3.75 5.42893 5.42893 3.75 7.5 3.75H18.75C20.8211 3.75 22.5 5.42893 22.5 7.5V29.0625C22.5 29.4082 22.3097 29.7259 22.0049 29.8891C21.7 30.0522 21.3301 30.0343 21.0425 29.8425L13.125 24.5642L5.20753 29.8425C4.91985 30.0343 4.54997 30.0522 4.24513 29.8891C3.9403 29.7259 3.75 29.4082 3.75 29.0625V7.5Z" fill="#3A3A3A"/>
                                    <path d="M8.00171 1.875C8.6501 0.754122 9.862 0 11.25 0H22.5C24.5711 0 26.25 1.67893 26.25 3.75V25.3125C26.25 25.6582 26.0597 25.9759 25.7549 26.1391C25.4501 26.3022 25.0802 26.2843 24.7925 26.0925L24.375 25.8142V3.75C24.375 2.84391 23.7323 2.08793 22.8779 1.91309C22.7558 1.88812 22.6295 1.875 22.5 1.875H8.00171Z" fill="#3A3A3A"/>
                                </svg>


                                <div style={{marginLeft: "15px"}}>
                                    <div >Selected</div>
                                </div>
                            </div>
                        </MyButton>
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <MyButton >
                            <div className={classes.forSvg}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.125 26.25C13.125 26.25 11.25 26.25 11.25 24.375C11.25 22.5 13.125 16.875 20.625 16.875C28.125 16.875 30 22.5 30 24.375C30 26.25 28.125 26.25 28.125 26.25H13.125Z" fill="#3A3A3A"/>
                                    <path d="M20.625 15C23.7316 15 26.25 12.4816 26.25 9.375C26.25 6.2684 23.7316 3.75 20.625 3.75C17.5184 3.75 15 6.2684 15 9.375C15 12.4816 17.5184 15 20.625 15Z" fill="#3A3A3A"/>
                                    <path d="M9.78068 26.25C9.51668 25.7173 9.375 25.0859 9.375 24.375C9.375 21.8335 10.6482 19.2198 13.0049 17.3999C11.9739 17.0702 10.7721 16.875 9.375 16.875C1.875 16.875 0 22.5 0 24.375C0 26.25 1.875 26.25 1.875 26.25H9.78068Z" fill="#3A3A3A"/>
                                    <path d="M8.4375 15C11.0263 15 13.125 12.9013 13.125 10.3125C13.125 7.72367 11.0263 5.625 8.4375 5.625C5.84867 5.625 3.75 7.72367 3.75 10.3125C3.75 12.9013 5.84867 15 8.4375 15Z" fill="#3A3A3A"/>
                                </svg>
                                <div style={{marginLeft: "15px"}}>
                                    <div >Group</div>
                                </div>
                            </div>
                        </MyButton>
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <MyButton >
                            <div className={classes.forSvg}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 30C17.0711 30 18.75 28.3211 18.75 26.25H11.25C11.25 28.3211 12.9289 30 15 30Z" fill="#3A3A3A"/>
                                    <path d="M16.8659 2.06069C16.8719 1.9996 16.875 1.93766 16.875 1.875C16.875 0.839466 16.0355 0 15 0C13.9645 0 13.125 0.839466 13.125 1.875C13.125 1.93767 13.1281 1.99962 13.1341 2.0607C8.85038 2.92584 5.62504 6.71126 5.62504 11.25C5.62504 13.308 4.6875 22.5 1.875 24.375H28.125C25.3125 22.5 24.375 13.308 24.375 11.25C24.375 6.71123 21.1497 2.92579 16.8659 2.06069Z" fill="#3A3A3A"/>
                                </svg>
                                <div style={{marginLeft: "15px"}}>
                                    <div >Notification</div>
                                </div>
                            </div>
                        </MyButton>
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <MyButton >
                            <div className={classes.forSvg}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6337 1.96947C16.8597 -0.656492 13.1403 -0.656491 12.3663 1.96947L12.1786 2.60631C11.684 4.28419 9.76754 5.07801 8.2314 4.24127L7.64837 3.9237C5.24423 2.61416 2.61416 5.24423 3.9237 7.64837L4.24127 8.2314C5.07801 9.76754 4.28419 11.684 2.60631 12.1786L1.96947 12.3663C-0.656492 13.1403 -0.656491 16.8597 1.96947 17.6337L2.60631 17.8214C4.28419 18.316 5.07801 20.2325 4.24127 21.7686L3.9237 22.3516C2.61416 24.7558 5.24423 27.3858 7.64836 26.0763L8.2314 25.7587C9.76754 24.922 11.684 25.7158 12.1786 27.3937L12.3663 28.0305C13.1403 30.6565 16.8597 30.6565 17.6337 28.0305L17.8214 27.3937C18.316 25.7158 20.2325 24.922 21.7686 25.7587L22.3516 26.0763C24.7558 27.3858 27.3858 24.7558 26.0763 22.3516L25.7587 21.7686C24.922 20.2325 25.7158 18.316 27.3937 17.8214L28.0305 17.6337C30.6565 16.8597 30.6565 13.1403 28.0305 12.3663L27.3937 12.1786C25.7158 11.684 24.922 9.76754 25.7587 8.2314L26.0763 7.64836C27.3858 5.24423 24.7558 2.61416 22.3516 3.9237L21.7686 4.24127C20.2325 5.07801 18.316 4.28419 17.8214 2.60631L17.6337 1.96947ZM15 20.4915C11.9671 20.4915 9.50847 18.0329 9.50847 15C9.50847 11.9671 11.9671 9.50847 15 9.50847C18.0329 9.50847 20.4915 11.9671 20.4915 15C20.4915 18.0329 18.0329 20.4915 15 20.4915Z" fill="black"/>
                                </svg>
                                <div style={{marginLeft: "15px"}}>
                                    <div >Settings</div>
                                </div>
                            </div>
                        </MyButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Menu;