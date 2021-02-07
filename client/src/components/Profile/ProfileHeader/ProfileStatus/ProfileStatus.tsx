import React, {useState} from 'react';
import s from './ProfileStatus.module.css';


interface IProps {
    status: string
    isOwner: boolean
    updateStatus(status: string): void
}


const ProfileStatus = React.memo(({status, updateStatus, isOwner}: IProps) => {

    const [editMode, setEditMode] = useState(false);
    const [newStatus, setNewStatus] = useState(status);

    let activateEditMode = () => setEditMode(true);

    let deActivateEditMode = () => {
        setEditMode(false);
        if (newStatus.length > 0) updateStatus(newStatus);
    };

    return (
        <>
            {editMode && isOwner &&
            <>
                <textarea onChange={(e) => setNewStatus(e.currentTarget.value)} onBlur={deActivateEditMode}
                          value={newStatus}
                          className={s.textarea} placeholder="Enter new status..." maxLength={140} autoFocus/>
                <button className={s.save} onClick={deActivateEditMode}>Save</button>
            </>
            }
            {!editMode && isOwner &&
            <span onClick={activateEditMode}
                  className={newStatus ? s.ownerStatus : s.empty}>{status || "Change status"}</span>
            }
            {!isOwner &&
            <span className={newStatus ? s.notOwnerStatus : s.empty}>{newStatus || "User have not status"}</span>
            }
        </>
    )
});

export default ProfileStatus;
