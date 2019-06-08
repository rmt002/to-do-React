import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


export class ToDoInput extends Component {
    constructor(props) {
        super();
    }

    submitToDo = (event) => {
        const description = document.getElementById('composer').value;
        if (description !== "" && description != null) {
            this.props.add(description)
            // this.props.add(description)
        }
    }

    state = {
        collapse: -1
    }

    render() {

        if (this.state.collapse > 0) {
            return (
                <div className="compose_box">
                    <InputGroup className="mb-3  justify-content-center">
                        <FormControl
                            placeholder="What do you need to get done?"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            id="composer"
                        />
                        <InputGroup.Append>
                            <button className="btn btn-primary" onClick={this.submitToDo} type="submit">
                                <i className="material-icons pencil saveNote">
                                    save
                                </i>
                            </button>
                        </InputGroup.Append>
                        <InputGroup.Append>
                            <button className="btn btn-danger add" onClick={() => { this.setState({ collapse: -1 }) }}>
                                <i className="material-icons pencil">
                                    cancel
                                </i>
                            </button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            )
        }
        else {
            return (
                <div className="compose_box">
                    <OverlayTrigger placement='top' overlay={<Tooltip>Add New Task</Tooltip>}>
                        <button className="btn btn-primary add" onClick={() => { this.setState({ collapse: 1 }) }}>
                            <i className="material-icons pencil">
                                edit
                            </i>
                        </button>
                    </OverlayTrigger>

                </div>
            )
        }

    }
}

export default ToDoInput