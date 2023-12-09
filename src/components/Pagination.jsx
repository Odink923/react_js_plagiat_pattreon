import React from 'react';

const Pagination = ({ currentPage, totalPageCount, onPageChange }) => {
    return (
        <div style={{display:"flex", justifyContent:"center"}} className="pagination">

                <button style={{border:'1px solid #000', padding: '20px',textAlign: 'center',cursor: 'pointer', fontSize:"16px", marginBottom:"20px"}}  onClick={() => onPageChange(currentPage+1)} >
                    Show more
                </button>

        </div>
    );
};

export default Pagination;