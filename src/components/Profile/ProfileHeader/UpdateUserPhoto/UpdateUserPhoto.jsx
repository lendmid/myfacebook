import React from 'react';
import s from './UpdateUserPhoto.module.css';
import add_icon from "../../../../assets/images/add_icon.svg"


const UpdateUserPhoto = React.memo(({setIsUpdatePhotoPopup, savePhoto}) => {
    
    let fileSize = (size) => {
        let i = Math.floor(Math.log(size) / Math.log(1024));
        return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
    }
    
    let showFileProps = () => {
        let input = document.getElementById('input_file');
        let label = input.nextElementSibling;
        let countFiles = '';
        if (input.files && input.files.length >= 1) {
            countFiles = input.files.length;
            label.children.pick_file.innerText = `Picked file: ${countFiles}`;
            let inputWrapper = input.parentElement;
            let file = input.files[0];
            inputWrapper.lastChild.innerHTML = `<span><b>File name: </b>${file.name}</span><span><b>Type file: </b>${file.type}</span><span><b>Size file: </b>${fileSize(file.size)}</span>`
        }
    }
    
    let photoSelected = () => {
        let input = document.getElementById('input_file');
        if (input.files.length) savePhoto(input.files[0]);
        setIsUpdatePhotoPopup(false);
    }
    
    
    return (
        <div className={s.background}>
            <div className={s.wrapper_popup}>
                <div className={s.header}>
                    <h2>Updating photo profile</h2>
                    <button className={s.close_icon} onClick={() => setIsUpdatePhotoPopup(false)}>╳</button>
                </div>
    
                <div className={s.input_wrapper} id="input_photo_wrapper">
                   <input type="file" id="input_file" className={s.input} onChange={showFileProps} />
                   <label htmlFor="input_file" className={s.label_input_file}>
                      <img className={s.input_icon} src={add_icon} alt="Pick file" />
                      <span className={s.pick_file} id="pick_file">Select file</span>
                   </label>
                    <div className={s.properties}>
                        <span><b>File name: </b></span>
                        <span><b>Type file: </b></span>
                        <span><b>Size file: </b></span>
                    </div>
                </div>
                <button className={s.button} onClick={photoSelected}>Update photo</button>
            </div>
            <div className={s.closer} onClick={() => setIsUpdatePhotoPopup(false)}></div>
        </div>
    )
})

export default UpdateUserPhoto;