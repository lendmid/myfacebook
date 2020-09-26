import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';


const ProfileStatus = React.memo((props) => {
    
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    // debugger
    
    
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
            {editMode && props.isOwner &&
                <>
                    <textarea onChange={onStatusChange} onBlur={deActivateEditMode} value={status ? status : ""} className={s.textarea} placeholder="Enter new status..." maxLength="140" autoFocus />
                    <button className={s.save} onClick={deActivateEditMode}>Save</button>
                </>
            }
            {!editMode && props.isOwner &&
            <span onClick={activateEditMode} className={status ? s.ownerStatus : s.empty}>{status || "Change status"}</span>
            }
            {!props.isOwner &&
            <span className={status ? s.notOwnerStatus : s.empty}>{status || "User have not status"}</span>
            }
        </>
    )
    
})
export default ProfileStatus;


//         <>
//         {editMode ?
//             <>
//             <textarea onChange={onStatusChange} onBlur={deActivateEditMode} value={status ? status : ""} className={s.textarea} placeholder="Enter new status..." maxLength="140" autoFocus />
//             <button className={s.save} onClick={deActivateEditMode}>Save</button>
//         </>
//             : <span onClick={activateEditMode} className={status ? s.ownerStatus : s.empty}>{status || "Change status"}</span>
//         }
//     </>
//     )
// } else {
//     return <span className={status ? s.notOwnerStatus : s.empty}>{status || "User have not status"}</span>
// }