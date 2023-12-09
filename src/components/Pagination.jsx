import React from 'react';

const Pagination = ({ currentPage, totalPageCount, onPageChange }) => {
    const pages = Array.from({ length: totalPageCount }, (_, index) => index + 1);
    return (
        <div className="pagination">
            {pages.map((page) => (
                <button  key={page} onClick={() => onPageChange(page)} disabled={currentPage === page}>
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;