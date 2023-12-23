import React from 'react';
import MyInput from "./MyInput";

const SearchInput = () => {

    const searchIcon = (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_10_910)">
                <path d="M16.1458 14.5833H15.3229L15.0312 14.3021C16.2812 12.8438 16.9271 10.8542 16.5729 8.73959C16.0833 5.84376 13.6666 3.53126 10.75 3.17709C6.34373 2.63543 2.6354 6.34376 3.17706 10.75C3.53123 13.6667 5.84373 16.0833 8.73956 16.5729C10.8541 16.9271 12.8437 16.2813 14.3021 15.0313L14.5833 15.3229V16.1458L19.0104 20.5729C19.4375 21 20.1354 21 20.5625 20.5729C20.9896 20.1458 20.9896 19.4479 20.5625 19.0208L16.1458 14.5833ZM9.89581 14.5833C7.30206 14.5833 5.20831 12.4896 5.20831 9.89584C5.20831 7.30209 7.30206 5.20834 9.89581 5.20834C12.4896 5.20834 14.5833 7.30209 14.5833 9.89584C14.5833 12.4896 12.4896 14.5833 9.89581 14.5833Z" fill="black" fill-opacity="0.5"/>
            </g>
            <defs>
                <clipPath id="clip0_10_910">
                    <rect width="25" height="25" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
    return <MyInput placeholder="Пошук" style={{paddingLeft:"56px"}} icon={searchIcon} />;

};

export default SearchInput;