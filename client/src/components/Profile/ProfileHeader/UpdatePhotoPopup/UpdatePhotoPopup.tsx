import React from 'react';
import s from './UpdatePhotoPopup.module.css';
import add_icon from "../../../../assets/images/add_icon.svg"


interface IProps {
    setIsPhotoPopup(arg0: boolean): void
    savePhoto(): void
}


const UpdatePhotoPopup = React.memo(({setIsPhotoPopup, savePhoto}: IProps) => {

    // let fileSize = (size: number) => {
    //     // let i = Math.floor(Math.log(size) / Math.log(1024));
    //     // return `${(size / Math.pow(1024, i)).toFixed(2) * 1 ['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
    // }

    let showFileProperties = () => {
        // let input = document.getElementById('input_file');
        // let label = input.nextElementSibling;
        // let countFiles = '';
        // if (input.files && input.files.length >= 1) {
        //     countFiles = input.files.length;
        //     label.children.pick_file.innerText = `Picked file: ${countFiles}`;
        //     let inputWrapper = input.parentElement;
        //     let file = input.files[0];
        //     inputWrapper.lastChild.innerHTML = `
        //         <span><b>File name: </b>${file.name}</span>
        //         <span><b>Type file: </b>${file.type}</span>
        //         <span><b>Size file: </b>${fileSize(file.size)}</span>`
        // }
    }

    let photoSelected = () => {
        let input = document.getElementById('input_file');
        if (!input) return
        // @ts-ignore
        if (input.files.length) {

            // @ts-ignore
            savePhoto(input.files[0]);
            setIsPhotoPopup(false);
        } else {
            alert("Please added file")
        }
    }

    return (
        <div className={s.background}>
            <div className={s.wrapper_popup}>
                <div className={s.header}>
                    <h2>Updating photo profile</h2>
                    <button className={s.close_icon} onClick={() => setIsPhotoPopup(false)}>╳</button>
                </div>

                <div className={s.input_wrapper} id="input_photo_wrapper">
                    <input type="file" id="input_file" className={s.input} onChange={showFileProperties}/>
                    <label htmlFor="input_file" className={s.label_input_file}>
                        <img className={s.input_icon} src={add_icon} alt="Pick file"/>
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
            <div className={s.closer} onClick={() => setIsPhotoPopup(false)}/>
        </div>
    )
})

export default UpdatePhotoPopup;