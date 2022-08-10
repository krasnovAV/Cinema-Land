import React, {FC, useMemo, useState} from 'react';
import {createPages} from "../../../utils/createPages";
import "./Pagination.scss"

type propsType = {
    pagesCount: number;
    currentPage: number;
    setCurrentPage: (page: number) => void
}

export const Pagination: FC<propsType> = ({pagesCount = 12, currentPage, setCurrentPage}) => {
    let pages = useMemo(() => createPages(pagesCount, currentPage), [pagesCount, currentPage]);

    return (
        <div className="pagination">
            {currentPage > 5 && <span className="firstPage"
                                      onClick={() => setCurrentPage(1)}>В начало</span>}

            {pages.map((page, index) => <span key={index}
                                              className={currentPage === page ? "currentPage" : "page"}
                                              onClick={() => setCurrentPage(page)}>{page}</span>)}

            {currentPage < pagesCount - 5 && <span className="lastPage"
                                                   onClick={() => setCurrentPage(pagesCount)}>В конец</span>}
        </div>
    );
};

