import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';


const ProfileStatus = React.memo(({status, updateStatus, isOwner}) => {
    
    const [editMode, setEditMode] = useState(false);
    const [newStatus, setNewStatus] = useState(status);
    
    useEffect(() => {
        setNewStatus(status);
        setEditMode(false);
    }, [status]);
    
    let activateEditMode = () => {
        setEditMode(true);
    };
    
    let onStatusChange = (e) => {
        setNewStatus(e.currentTarget.value)
    };
    
    let deActivateEditMode = () => {
        setEditMode(false);
        if (newStatus && newStatus.length > 0) updateStatus(status);
    };
    
    return (
        <>
            {editMode && isOwner &&
            <>
                    <textarea onChange={onStatusChange} onBlur={deActivateEditMode} value={newStatus ? newStatus : ""} className={s.textarea} placeholder="Enter new status..." maxLength="140" autoFocus />
                    <button className={s.save} onClick={deActivateEditMode}>Save</button>
                </>
            }
            {!editMode && isOwner &&
            <span onClick={activateEditMode} className={newStatus ? s.ownerStatus : s.empty}>{status || "Change status"}</span>
            }
            {!isOwner &&
            <span className={newStatus ? s.notOwnerStatus : s.empty}>{newStatus || "User have not status"}</span>
            }
        </>
    )
    
});

export default ProfileStatus;
