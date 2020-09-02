import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        });
    }
    
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status || "----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" onChange={this.onStatusChange} value={this.state.status} onBlur={ this.deActivateEditMode } autoFocus={true} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
