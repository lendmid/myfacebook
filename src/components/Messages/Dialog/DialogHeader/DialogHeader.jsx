import React from "react";
import s from './DialogHeader.module.css';


const DialogHeader = React.memo(({img, name}) => {
    return (
        <div className={s.dialog_header}>
            <div className={s.main_information}>
                <img src={img} alt="" />
                <span>{name}</span>
            </div>
        </div>
    )
})

export default DialogHeader;
