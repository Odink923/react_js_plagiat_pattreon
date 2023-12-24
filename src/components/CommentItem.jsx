import React from 'react';


const CommentItem = ({...props}) => {
    return (
        <div style={{display:"flex",marginTop:"20px",fontFamily:"Trebuchet MS"}}>
            <svg  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="21.3125" fill="#3A3A3A" stroke="black" stroke-width="2"/>
                <g clip-path="url(#clip0_10_1032)">
                    <path d="M25 4.16663C13.5 4.16663 4.16669 13.5 4.16669 25C4.16669 36.5 13.5 45.8333 25 45.8333C36.5 45.8333 45.8334 36.5 45.8334 25C45.8334 13.5 36.5 4.16663 25 4.16663ZM25 10.4166C28.4584 10.4166 31.25 13.2083 31.25 16.6666C31.25 20.125 28.4584 22.9166 25 22.9166C21.5417 22.9166 18.75 20.125 18.75 16.6666C18.75 13.2083 21.5417 10.4166 25 10.4166ZM25 40C19.7917 40 15.1875 37.3333 12.5 33.2916C12.5625 29.1458 20.8334 26.875 25 26.875C29.1459 26.875 37.4375 29.1458 37.5 33.2916C34.8125 37.3333 30.2084 40 25 40Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_10_1032">
                        <rect width="50" height="50" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

            <div style={{marginLeft:"10px"}}>
            <p style={{fontSize: 20}}>{props.comment.Name}</p>
            <p style={{fontSize: 15, marginTop:"5px"}}>{props.comment.body}</p>
            </div>
        </div>
    );
};

export default CommentItem;