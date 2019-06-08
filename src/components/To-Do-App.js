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
        ],
        maxID:0
    }

    findMaxID=()=>{
        let max=0;
        if(this.state.toDoArray!==undefined){
            this.state.toDoArray.forEach((index)=>{
                if(index.id>this.state.toDoArray[max].id){
                    console.log(index.id)
                    max=index.id;
                }
            })
        }
        console.log(max)
        return max;
    }
    clearCompleted=()=>{

    }

    markAllDone=()=>{
        let oldData=this.state.toDoArray;
        oldData.forEach((index)=>{
            index.done=true
        })
        this.setState({
            toDoArray:oldData
        })
    }

    addToDo=(data)=>{
        const maxID=this.findMaxID();
        let oldData=this.state.toDoArray;
        oldData.push({
            id:maxID+2,
            description:data,
            done:false
        })
        this.setState({
            toDoArray:oldData
        })
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
                        <ToDoHeader allDone={this.markAllDone} />
                        <ToDoList data={this.state.toDoArray} markDone={this.markDone}/>
                    </Card.Body>
                </Card>
                <ToDoInput add={this.addToDo}/>
            </div>
        )
    }
}

export default ToDoApp