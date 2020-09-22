import React from 'react';
import s from './UpdateUserPhoto.module.css';
import add_icon from "../../../../assets/images/add_icon.svg"


const UpdateUserPhoto = React.memo(({setIsUpdatePhotoPopup, savePhoto}) => {
    
    let fileSize = (size) => {
        let i = Math.floor(Math.log(size) / Math.log(1024));
        return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
    }
    
    let showFile = (e) => {
        let input = document.getElementById('input_file');
        let label = input.nextElementSibling;
        let countFiles = '';
        if (input.files && input.files.length >= 1) {
            countFiles = input.files.length;
            label.children.input_file_button_text.innerText = `Выбрано файлов: ${countFiles}`;
            // let inputWrapper = input.parentElement;
            let file = input.files[0];
            let div = document.createElement("div");
            // div.className = "list-group-item";
            div.innerHTML = `Имя Файла ${file.name} <br> Тип Файла: ${file.type} <br> Размер Файла: ${fileSize(file.size)}`;
            document.getElementById('input_file_wrapper').appendChild(div);
        }
    }
    
    
    let onPhotoSelected = (e) => {
        if (e.target.files.length) savePhoto(e.target.files[0])
    }
    
    //refactoring: need will doing modal window with close
    return (
        <div className={s.background}>
        {/*<div className={s.background} onClick={(event) => setUpdatingPhoto(false)}>*/}
            {/*    <div className={s.wrapper} >*/}
            <div className={s.wrapper}>
                <div className={s.header}>
                    <h2>Updating photo profile</h2>
                    <button className={s.close_icon} onClick={() => setIsUpdatePhotoPopup(false)}>╳</button>
                </div>
    
                {/*<button onChange={onPhotoSelected}>Update photo</button>*/}
                <div className={s.input_wrapper} id="input_file_wrapper">
                   <input name="file" type="file" id="input_file" className={s.input + " " + s.input_file} onChange={showFile} />
                   <label htmlFor="input_file" className={s.input_file_button}>
                      <span className={s.input_file_icon_wrapper}><img className={s.input_file_icon} src={add_icon} alt="Pick file" /></span>
                      <span className={s.input_file_button_text} id="input_file_button_text">Выберите файл</span>
                   </label>
                </div>
                
                
            </div>
            <div className={s.closer} onClick={() => setIsUpdatePhotoPopup(false)}></div>
        </div>
    )
})

export default UpdateUserPhoto;