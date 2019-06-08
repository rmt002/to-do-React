import React, { Component } from 'react';
import Nav from '../../node_modules/react-bootstrap/Nav';
import Card from '../../node_modules/react-bootstrap/Card';

export class ToDoHeader extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link ><button className="btn btn-light" onClick={this.props.allDone}><i className="material-icons">done_all</i></button></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link><button className="btn btn-danger"><i className="material-icons">delete</i></button></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ToDoHeader