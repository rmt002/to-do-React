import React,{ Component } from 'react';
import ToDoHeader from './To-Do-Header';
import ToDoList from './To-Do-List';
import ToDoEntry from './To-Do-Entry';

export class ToDoApp extends Component{
    render(){
        return(
            <div>
                <ToDoHeader/>
                <ToDoList />
                <ToDoEntry/>
            </div>
        )
    }
}

export default ToDoApp