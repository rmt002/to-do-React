import React,{ Component } from 'react';

export class ToDoEntry extends Component{
    constructor(props){
        super();
        this.mounted=false;
    }
    markAsDonehandler=(event)=>{
        this.props.markDone(event.target.checked,this.props.data.id)
    }

    componentWillMount=()=>{
        this.mounted=true
    }
    componentWillUnmount=()=>{
        this.mounted=false
    }
    confirmDelete=()=>
    {
        let newElement=[];
        newElement.push(
            <span key={10}className="deleteConfirm"><i className="material-icons" onClick={this.handleDelete}>delete</i></span>
        )
        this.setState({
            deleteElement:newElement
        })
        setTimeout(()=>{
            let emptyElement=[];
            this.mounted && this.setState({
                deleteElement:emptyElement
            })
        },2000)
    }
    handleDelete=()=>{
        alert("delete "+this.props.data.id)
        this.props.delete(this.props.data.id)
    }
    state={
        deleteElement:[],
    }
    render(){
        console.log(this.state.deleteElement)
        return(
            <div onClick={this.confirmDelete} >
                <input type="checkbox" checked={this.props.data.done} onChange={this.markAsDonehandler} className="checkbx"></input>
                <span className="tododata" style={{
                    textDecoration:this.props.data.done?'line-through':'none',
                    backgroundColor:(this.state.deleteElement[0])?'red':'white'
                    }}>{this.props.data.description}</span>
                {this.state.deleteElement}
            </div> 
        )
    }
}
export default ToDoEntry

//style={{backgroundColor:(this.state.deleteElement[0])?'red':'white'}}