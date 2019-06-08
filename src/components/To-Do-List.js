import React, { Component } from 'react';
import Card from '../../node_modules/react-bootstrap/Card';
import ListGroup from '../../node_modules/react-bootstrap/ListGroup'
import ToDoEntry from './To-Do-Entry';

export class ToDoList extends Component {
    constructor(props){
        super();
    }
    render() {
        var elements=[]
        for(var i=0;i<this.props.data.length;i++){
            elements.push(<ListGroup.Item action key={this.props.data[i].id}>
                <ToDoEntry key={this.props.data[i].id} data={this.props.data[i]} markDone={this.props.markDone} delete={this.props.delete}/>
                </ListGroup.Item>)
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