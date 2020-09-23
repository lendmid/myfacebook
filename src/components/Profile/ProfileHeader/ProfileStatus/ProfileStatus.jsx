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
        props.updateStatus(status);
    }
    
    return (
        <>
            {editMode ?
                <textarea onChange={onStatusChange} value={status} onBlur={deActivateEditMode} className={s.textarea} />
                :
                <span onDoubleClick={activateEditMode} className={s.span}>{status || "user have not status"}</span>
            }
        </>
    )
})

export default ProfileStatus;