import React, { Component } from 'react';
import ToDoHeader from './To-Do-Header';
import ToDoList from './To-Do-List';
import ToDoEntry from './To-Do-Entry';
import Card from '../../node_modules/react-bootstrap/Card';

export class ToDoApp extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <ToDoHeader />
                        <ToDoList />
                        <ToDoEntry />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ToDoApp