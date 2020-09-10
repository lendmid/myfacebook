import React, {useEffect, useState} from 'react';


let ProfileStatusWithHooks = props => {
    
    let [editMode, setEditMode] =  useState({editMode: true});
    let [status, setStatus] =  useState({status: props.status});
    
    useEffect(() => {
        setStatus(props.status);
    
    }, [])
    
    
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
            {/*{!editMode ?*/}
            <div>
                <span onDoubleClick={activateEditMode}>{status.status || "undefined"}</span>
            </div>
            {/*: <div>*/}
            {/*    <input type="text" onChange={onStatusChange} value={status} onBlur={deActivateEditMode} autoFocus={true} />*/}
            {/*</div>*/}
            {/*}*/}
        </div>
    )
}

export default ProfileStatusWithHooks;