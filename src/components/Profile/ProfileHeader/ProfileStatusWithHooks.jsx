import React, {useEffect, useState} from 'react';


let ProfileStatusWithHooks = props => {
    
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
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || "undefined"}</span>
            </div>}
            {editMode &&
            <div>
                <input type="text" onChange={onStatusChange} value={status} onBlur={deActivateEditMode} />
            </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;