import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: true
    }
    
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} type="text" />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
