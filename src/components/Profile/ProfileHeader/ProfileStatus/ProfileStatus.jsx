import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';


const ProfileStatus = React.memo((props) => {
    
    let [editMode, setEditMode] = useState({editMode: false});
    let [status, setStatus] = useState({status: props.status});
    
    useEffect(() => {
        setStatus(props.status);
        setEditMode(false);
    }, [props.status])
    
    
    let activateEditMode = () => {
        setEditMode(true);
    }
    
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    
    let deActivateEditMode = () => {
        setEditMode(false);
        if (status && status.length > 0) props.updateStatus(status);
    }
    
    return (
        <>
            {editMode ?
                <>
                    <textarea onChange={onStatusChange} onBlur={deActivateEditMode} value={status ? status : ""} className={s.textarea} placeholder="Enter new status..." maxLength="140" autoFocus />
                    <button className={s.save} onClick={deActivateEditMode}>Save</button>
                </>
                :
                <span onClick={activateEditMode} className={status ? s.status : s.empty}>{status || "Change status"}</span>
            }
        </>
    )
})

export default ProfileStatus;