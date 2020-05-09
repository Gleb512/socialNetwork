import React from 'react';

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate () {
        console.log("My component")
    }

    render() {
        console.log("render")
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <h4 onDoubleClick={ this.activateEditMode }>
                            {this.state.status || "no status"}
                        </h4>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <h4>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode }
                                   value={this.state.status} />
                        </h4>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;