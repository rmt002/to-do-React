import React, {Component} from "react";
import './bootstrap/dist/css/bootstrap.css';
import List from './list';

class ToDo extends Component{
 constructor(props){
     super(props);
     this.state={ 
         
        tasks: [{
            title:'Javascript', done: false
        }]}
     this.addTask=this.addTask.bind(this);
     this.setDone=this.setDone.bind(this);
     this.allDone=this.allDone.bind(this);
     this.selDelete=this.selDelete.bind(this);
     this.deleteTask=this.deleteTask.bind(this);
 }   
     

    addTask(e){
    
    if(this._inputElement.value !==""){
    var text=this._inputElement.value;
    this._inputElement.value="";
    this.setState({
                        tasks: [...this.state.tasks,{
                title:text,
                done:false
                
            }]}
        )
      console.log(this.state.tasks);
        }        
      e.preventDefault();      
    }          


    setDone(e,index){
     console.log(e.target.checked);
     const task=[...this.state.tasks];
     task[index]= {...task[index]};
     task[index].done=e.target.checked;   
     this.setState({tasks:task})
    }
    
    deleteTask(index){
        const task=[...this.state.tasks];
        task.splice(index,1);
        this.setState({
            tasks: task
        })
    }

    selDelete(){
      var task =this.state.tasks.filter(task=> {
        if(!task.done) return task;
        });
        this.setState({
          tasks: task
      })      
    }
    
    allDone(){
        const task= this.state.tasks.map(task => {
            return{
                title: task.title,
                done:true
        }
        })
        this.setState({
            tasks: task
        })
    }


    render(){
        return(
           <div>
                <h1>To Do List</h1>
                <form onSubmit={this.addTask}>
                    <input ref={(a)=>this._inputElement =a}
                            placeholder="Enter Task" >
                    </input>

                    <button className="btn btn-primary m-2"  type="submit">ADD</button>
                    <button className="btn btn-warning m-1" onClick={this.allDone}>Set All Done</button>
                    <button className="btn btn-danger m-2"onClick={this.selDelete}>Delete Completed</button>
                </form>
                
                <List 
                tasks={this.state.tasks} 
                deleteTask={this.deleteTask}
                setDone={this.setDone}

                />
            </div>

        )
    }
};


export default ToDo;
