import React,{ Component } from 'react';

export class ToDoEntry extends Component{
    constructor(props){
        super()
    }
    markAsDonehandler=(event)=>{
        this.props.markDone(event.target.checked,this.props.data.id)
    }
    state={
        value:false
    }
    render(){
        return(
            <div>
                <input type="checkbox" checked={this.props.data.done} onChange={this.markAsDonehandler} className="checkbx"></input>
                <span className="tododata" style={{textDecoration:this.props.data.done?'line-through':'none'}}>{this.props.data.description}</span>
            </div> 
        )
    }
}
export default ToDoEntry