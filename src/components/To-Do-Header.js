import React, { Component } from 'react';
import Nav from '../../node_modules/react-bootstrap/Nav';
import Card from '../../node_modules/react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export class ToDoHeader extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <h3 className="titlecard">Your Tasks</h3>
                        <Nav className="justify-content-end deleteConfirm" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link >
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Mark All Completed</Tooltip>}>
                                        <button className="btn btn-light" onClick={this.props.allDone}><i className="material-icons">done_all</i></button>
                                    </OverlayTrigger>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link >
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Delete Completed</Tooltip>}>
                                    <button className="btn btn-danger" onClick={this.props.clearAll}><i className="material-icons">delete</i></button>
                                    </OverlayTrigger>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ToDoHeader


