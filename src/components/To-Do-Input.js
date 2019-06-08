import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export class ToDoInput extends Component {
    constructor(props) {
        super();
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
                            <button className="btn btn-primary" type="submit">
                                <i class="material-icons pencil saveNote">
                                    save
                                </i>
                            </button>
                        </InputGroup.Append>
                        <InputGroup.Append>
                            <button className="btn btn-danger add" onClick={() => { this.setState({ collapse: -1 }) }}>
                                <i class="material-icons pencil">
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
                    <button className="btn btn-primary add" onClick={() => { this.setState({ collapse: 1 }) }}>
                        <i class="material-icons pencil">
                        edit
                        </i>
                    </button>
                </div>
            )
        }

    }
}

export default ToDoInput