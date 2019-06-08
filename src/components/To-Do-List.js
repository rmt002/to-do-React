import React, { Component } from 'react';
import Card from '../../node_modules/react-bootstrap/Card';
import ListGroup from '../../node_modules/react-bootstrap/ListGroup'
import ToDoEntry from './To-Do-Entry';

export class ToDoList extends Component {
    render() {
        var elements=[]
        for(var i=0;i<5;i++){
            elements.push(<ListGroup.Item><ToDoEntry/></ListGroup.Item>)
        }
        return (
            <div>
                <Card style={{ width: '100%' }}>
                    <ListGroup variant="flush">
                        {elements}                        
                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default ToDoList