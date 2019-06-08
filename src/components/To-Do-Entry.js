import React,{ Component } from 'react';

export class ToDoEntry extends Component{
    render(){
        var data="This is a test To-do"
        return(
            <div>
                <input type="checkbox" className="checkbx"></input>
                <span className="tododata">{data}</span>
            </div> 
        )
    }
}

export default ToDoEntry