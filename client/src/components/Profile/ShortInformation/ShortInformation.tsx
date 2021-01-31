import React from 'react';
import s from './ShortInformation.module.css';
import home from "../../../assets/images/home.png"
import work from "../../../assets/images/work.png"


interface IProps {
    placeOfWork: string | null
    liveIn: string | null
    isOwner: boolean
}


const ShortInformation = React.memo(({placeOfWork, liveIn, isOwner}: IProps) => {

    let changeInformation = () => {
        //refactoring: remove alert after change API
        alert("Soon this function will be work")
    }

    return (
        <div className={s.wrapper}>
            <h2>Short information</h2>
            <span>
                <img src={work} alt="work place"
                     className={s.icon}/> Place of work:
            </span> {placeOfWork ? placeOfWork : ''}
            <span>
                <img src={home} alt="home" className={s.icon}/> live in:
            </span> {liveIn ? liveIn : ''}
            {isOwner && <button className={s.button} onClick={changeInformation}>Change information</button>}
        </div>
    )
})

export default ShortInformation;
