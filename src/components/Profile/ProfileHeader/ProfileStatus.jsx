import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    
    toggleEditMode = (e) => {
        this.setState({
            editMode: !this.state.editMode
        });
    }
    
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.toggleEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} type="text" onBlur={ this.toggleEditMode.bind(this) } autoFocus={true} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
