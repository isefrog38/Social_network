import React, {useState} from 'react';
import s from "./Pagination.module.css";

type PaginationType = {
    totalItemsCountPage: number
    pageSize: number
    activePage: number
    onClickHandler: (page: number) => void
}

export const Pagination = ({activePage, onClickHandler, totalItemsCountPage, pageSize}: PaginationType) => {

    const [portionNumber, setPortionNumber] = useState<number>(1);

    let portionSize = 10;
    let pagesCount = Math.ceil(totalItemsCountPage / pageSize);
    let totalPages = [];
    for (let i = 1; i <= pagesCount; i++) {
        totalPages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const setPrevPage = () => {
        if (portionNumber === 0) return
        else {
            setPortionNumber(portionNumber - 1);
        }
    };
    const setNextPage = () => setPortionNumber(portionNumber + 1);

    return (
        <>
            <button disabled={portionNumber <= 1} className={portionNumber <= 1 ? `${s.button_prev} + ${s.disabled}` : s.button_prev}
                    onClick={setPrevPage}>Prev
            </button>
            <div className={s.block_pages}>
                {totalPages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => <div key={page}
                                      onClick={() => {
                                          onClickHandler(page)
                                      }}
                                      className={activePage === page ? `${s.oneButtonPage} + ${s.active} ` : s.oneButtonPage}>
                            <span className={activePage === page ? s.activeButtonPage : ""}>{page}</span>
                        </div>
                    )}
            </div>
            <button disabled={portionCount <= portionNumber} className={portionCount > portionNumber ? s.button_next : `${s.button_next} + ${s.disabled}`}
                    onClick={setNextPage}>Next
            </button>
        </>
    )
};
