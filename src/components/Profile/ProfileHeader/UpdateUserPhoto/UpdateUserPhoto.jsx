import React from 'react';
import s from './UpdateUserPhoto.module.css';


const UpdateUserPhoto = React.memo(({setUpdatingPhoto, savePhoto}) => {
    
    const onPhotoSelected = (e) => {
        if (e.target.files.length) savePhoto(e.target.files[0])
    }
    
    //refactoring: need will doing modal window with close
    return (
        <div className={s.background}>
        {/*<div className={s.background} onClick={(event) => setUpdatingPhoto(false)}>*/}
            <div className={s.wrapper}>
                <input type="file" className={s.file} onChange={onPhotoSelected} />
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