import React, {Component} from 'react';

class List extends Component{
    rendesr(){
        return(
        <ul>
                    {this.props.tasks.map((task,index) => {
                        return (
                        <li key={task.title}>
                            <button id="del" className="btn btn-danger btn-sm m-3" onClick={()=>this.props.deleteTask(index)}>X
                             </button>
                            <input onChange={(e)=>this.props.setDone(e,index)} 
                                    type="checkbox" checked={task.done} /> 
                            <span style={{textDecoration: task.done? 'line-through': 'inherit'}}>
                                    {task.title}   
                             </span>
                            
                        </li>
                
                )})}
                </ul>
         ) }
    
}

export default List;