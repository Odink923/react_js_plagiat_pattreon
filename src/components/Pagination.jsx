import React from 'react';
import MyButton from "./UI/button/MyButton";

const Pagination = ({ currentPage, totalPageCount, onPageChange }) => {
    return (
        <div style={{display:"flex", justifyContent:"center"}} className="pagination">
                <MyButton style={{border:'1px solid #000', padding: '20px',textAlign: 'center',cursor: 'pointer', fontSize:"16px", marginBottom:"20px"}}  onClick={() => onPageChange(currentPage+1)} >
                    <svg width="145" height="100" viewBox="0 0 145 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.231 35.7916L72.5 54.875L44.7687 35.7916L36.25 41.6666L72.5 66.6666L108.75 41.6666L100.231 35.7916Z" fill="#C9F4AA"/>
                    </svg>
                </MyButton>
        </div>
    );
};

export default Pagination;