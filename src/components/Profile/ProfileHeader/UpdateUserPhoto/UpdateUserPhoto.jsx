import React from 'react';
import s from './UpdateUserPhoto.module.css';


const UpdateUserPhoto = React.memo(({setUpdatingPhoto}) => {
    //refactoring: need will doing modal window with close
    return (
        <div className={s.background} onClick={(event) => setUpdatingPhoto(false)}>
            <div className={s.wrapper}>
                <input type="file" className={s.file} />
                {/*<div className={s.input__wrapper}>*/}
                {/*<label className={s.input__file_button}>*/}
                {/*   <input type="file" className={s.input} />*/}
                {/*   <span className={s.input__file_icon_wrapper}>*/}
                {/*       <img className={s.input__file_icon} src={add} alt="Выбрать файл" />*/}
                {/*   </span>*/}
                {/*   <span className={s.input__file_button_text}>Выберите файл</span>*/}
                {/*</label>*/}
                {/*</div>*/}
            </div>
        </div>
    )
})

export default UpdateUserPhoto;