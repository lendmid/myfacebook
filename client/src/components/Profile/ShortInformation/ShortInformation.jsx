import React from 'react';
import s from './ShortInformation.module.css';
import home from "../../../assets/images/home.png"
import work from "../../../assets/images/work.png"


const ShortInformation = React.memo((props) => {
    
    let changeInformation = () => {
        //refactoring: remove alert after change API
        alert("Soon this function will be work")
        
    }
    
    return (
        <div className={s.wrapper}>
            <h2>Short information</h2>
            <span><img src={work} alt="work place" className={s.icon} /> Place of work: </span> {props.profile.placeOfWork ? props.profile.placeOfWork : ''}
            <span><img src={home} alt="home" className={s.icon} /> live in: </span> {props.profile.liveIn ? props.profile.liveIn : ''}
            {props.isOwner && <button className={s.button} onClick={changeInformation}>Change information</button>}
        </div>
    )
})

export default ShortInformation;
