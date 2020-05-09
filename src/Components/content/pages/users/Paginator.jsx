import React, {useState} from 'react';
import s from './users.module.css';


let Paginator = ({totalUsersCount, currentPage, pageSize, onPageChenged, portionSize = 10}) => {
        let pagesCount = Math.ceil (totalUsersCount / pageSize);
        let pages = [];
        for( let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }

        let portionCount = Math.ceil(pagesCount/ portionSize);
        let [portionNumber, setPortionNumber] = useState(1);
        let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
        let rightPortionPageNumber = portionNumber * portionSize;
        return (
            <div className={s.paginationMenu}>
                { portionNumber > 1 &&
                    <button className={s.pag_btn} onClick={ () => {setPortionNumber(portionNumber - 1)} }>
                    Prev
                </button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {

                    return  <span key={p} className={(
                        currentPage === p  ? s.selectedPage : ""
                    )}
                                 onClick={ (e) =>{ onPageChenged(p) }}>
                                {p}
                            </span>
                })}
                { portionCount > portionNumber &&
                    <button className={s.pag_btn} onClick={ () => {setPortionNumber(portionNumber + 1)} }>
                        Next
                    </button>
                }
            </div>
        )
    }
export default Paginator;