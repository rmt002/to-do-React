import React, { Component } from 'react';
import Nav from '../../node_modules/react-bootstrap/Nav';
export class ToDoHeader extends Component {
    render() {
        return (
            <div>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link><button className="btn btn-primary">Add New Task</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link ><button className="btn btn-secondary">Mark All Complete</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><button className="btn btn-danger">Clear All Completed</button></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default ToDoHeader