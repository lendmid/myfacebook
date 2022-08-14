import React, {useEffect} from "react";
import s from './DialogHistory.module.css';


const DialogHistory = React.memo(({historyMessages}) => {
    useEffect(() => {
        let messages = document.getElementById('historyMessages');
        messages.scrollTo({top: messages.scrollHeight, behavior: 'smooth'});
    });
    
    return (
        <div className={s.history_wrapper} id="historyMessages">
            {historyMessages}
        </div>
    )
})

export default DialogHistory;
