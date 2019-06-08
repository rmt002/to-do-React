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
            {id:1,done:false,description:"This is a test to do"},
            {id:2,done:false,description:"This is  to do"},
            {id:3,done:false,description:"This is  dto do"}
        ]
    }

    clearCompleted=()=>{

    }

    markAllDone=()=>{
    }

    addToDo=(data)=>{

    }

    markDone=(status,completedID)=>{
        let oldData=this.state.toDoArray;
        let index=oldData.findIndex(data=>data.id===completedID);
        oldData[index]={
            id:oldData[index].id,
            done:status,
            description:oldData[index].description
        }
        this.setState({
            toDoArray:oldData
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <ToDoHeader />
                        <ToDoList data={this.state.toDoArray} markDone={this.markDone}/>
                    </Card.Body>
                </Card>
                <ToDoInput/>
            </div>
        )
    }
}

export default ToDoApp