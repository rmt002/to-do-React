import React, { Component } from 'react';
import ToDoHeader from './To-Do-Header';
import ToDoList from './To-Do-List';
import Card from '../../node_modules/react-bootstrap/Card';
import ToDoInput from './To-Do-Input';

export class ToDoApp extends Component {
    constructor(props){
        super();
    }

    state={
        toDoArray:[
            {done:false,description:"This is a test to do"}
        ]
    }

    clearCompleted=()=>{

    }

    markAllDone=()=>{

    }

    addToDo=(data)=>{

    }

    markDone=(data)=>{

    }
    
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <ToDoHeader />
                        <ToDoList />
                    </Card.Body>
                </Card>
                <ToDoInput/>
            </div>
        )
    }
}

export default ToDoApp