import React, {useEffect, useState} from 'react';
const ProfileStatusWithHooks = (props) => {

        let [editMode, setEditMode] = useState( false);
        let [status, setStatus] = useState(props.status);

        useEffect(() => {
            setStatus(props.status)
        }, [props.status])

        const activateEditMode = () => {
            setEditMode(true);
        }
        const deactivateEditMode = () => {
            setEditMode(false);
            props.updateUserStatus(status);
        }
        const onStatusChange = (e) => {
            setStatus(e.currentTarget.value);
        }
        return (<div>
                {!editMode &&
                    <div>
                        <h4 onDoubleClick={ activateEditMode }>
                            {status || "no status"}
                        </h4>
                    </div>
                }
                {editMode &&
                    <div>
                        <h4>
                            <input onChange={onStatusChange}
                                   autoFocus={true}
                                   onBlur={deactivateEditMode }
                                   value={status}
                            />
                        </h4>
                    </div>
                }
                </div>
        );
}
export default ProfileStatusWithHooks;