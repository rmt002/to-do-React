import React, { Component } from 'react';
import Nav from '../../node_modules/react-bootstrap/Nav';
export class ToDoHeader extends Component {
    render() {
        return (
            <div>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link ><button className="btn btn-light"><i class="material-icons">done_all</i></button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><button className="btn btn-danger"><i class="material-icons">delete</i></button></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default ToDoHeader