import React, {useState} from 'react';
import s from './Paginator.module.css';


const Paginator = React.memo(({totalItemsCount, pageSize, currentPage, onPageChanged, kitSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    let kitCount = Math.ceil(pagesCount / kitSize);
    let [kitNumber, setKitNumber] = useState(1);
    let leftKitPageNumber = (kitNumber - 1) * kitSize + 1;
    let rightKitPageNumber = kitNumber * kitSize;

    return (
        <div className={s.paginator}>
            {kitCount > 1 &&
            <button className={s.button}
                    onClick={() => setKitNumber(kitNumber - 1)}>Prev</button>
            }
            
            <div className="numbers">
                {pages.filter(pageNumber => pageNumber >= leftKitPageNumber && pageNumber <= rightKitPageNumber)
                    .map((pageNumber) => {
                        return <span className={currentPage === pageNumber ? s.selectedPage : s.nonSelectedPage}
                                     onClick={() => onPageChanged(pageNumber)}>{pageNumber}</span> })
                }
            </div>
            
            {kitCount > kitNumber &&
            <button className={s.button}
                    onClick={() => setKitNumber(kitNumber + 1)}>Next</button>
            
            }
        </div>
    )
})

export default Paginator;
