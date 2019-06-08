import React, { Component } from 'react';
import ToDoHeader from './To-Do-Header';
import ToDoList from './To-Do-List';
import Card from '../../node_modules/react-bootstrap/Card';
import ToDoInput from './To-Do-Input';

const InitialState={
    toDoArray:[],
    max:1
}

//localStorage.getItem("appState")?JSON.parse(localStorage.getItem("appState")) :

export class ToDoApp extends Component {
    constructor(props){
        super();
        this.state=localStorage.getItem("appState")?JSON.parse(localStorage.getItem("appState")) : InitialState;
        console.log(this.state,InitialState)
       
    }

    state={
        toDoArray:[
            // {id:1,done:false,description:"This is a test to do"},
            // {id:2,done:false,description:"This is  to do"},
            // {id:3,done:false,description:"This is  dto do"}
        ]
    }

    saveAllStates=()=>{
        localStorage.setItem('appState', JSON.stringify(this.state));
    }

    addToDo=(data)=>{
        const maxID=this.findMaxID();
        let oldData=this.state.toDoArray;
        oldData.push({
            id:(maxID),
            description:data,
            done:false
        })
        console.log(oldData)
        this.setState({
            toDoArray:oldData,
            max:this.state.max+1
        })
        this.saveAllStates()
    }

    deleteToDo=(id)=>{
        let oldData=this.state.toDoArray;
        oldData.forEach((index)=>{
            if(index.id===id){
                oldData.splice(index,1)
            }
        })
        this.setState({
            toDoArray:oldData
        })
        this.saveAllStates()
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
        this.saveAllStates()
    }

    clearCompleted=()=>{
        let oldData=this.state.toDoArray;
        oldData.forEach((index)=>{
            if(index.done){
                oldData.splice(index,1)
            }
        })
        this.setState({
            toDoArray:oldData
        })
        this.saveAllStates()
    }

    markAllDone=()=>{
        let oldData=this.state.toDoArray;
        oldData.forEach((index)=>{
            index.done=true
        })
        this.setState({
            toDoArray:oldData
        })
        this.saveAllStates()
    }

    findMaxID=()=>{
        let max=this.state.max
        if(max==null){
            max=1
            this.setState({
                max:1
            })
        }
        return max+1;
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <ToDoHeader allDone={this.markAllDone} clearAll={this.clearCompleted}/>
                        <ToDoList data={this.state.toDoArray} markDone={this.markDone} delete={this.deleteToDo}/>
                    </Card.Body>
                </Card>
                <ToDoInput add={this.addToDo}/>
            </div>
        )
    }
}

export default ToDoApp