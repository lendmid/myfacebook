import React from "react";
import s from './DialogHistory.module.css';


const DialogHistory = React.memo(({historyMessages}) => {
    return (
        <div className={s.history_wrapper}>
            {historyMessages}
        </div>
    )
})

export default DialogHistory;
