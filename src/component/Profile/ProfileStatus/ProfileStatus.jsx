import React from "react";
import style from './ProfileStatus.module.scss';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            });
    };

    deactivateEditMode = () => {
        this.setState(
            {editMode: false}
        );

        this.props.updateUserStatus(this.state.status)

    };

    onUserStatusChange = (event) => {
        this.setState(
            {
                status: event.currentTarget.value
            }
        );
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.status !== this.props.status){
            this.setState(
                {status: this.props.status}
            );
        }

        console.log("Component was updated")
    }

    render() {
        return (
            <>
                <div>
                    {this.state.editMode
                        ? <input autoFocus={true} onChange={this.onUserStatusChange} onBlur={this.deactivateEditMode}
                                 value={this.state.status} type="text"/>
                        : <span onClick={this.activateEditMode}>{this.props.status}</span>
                    }
                </div>
            </>
        )
    }

}

export default ProfileStatus;