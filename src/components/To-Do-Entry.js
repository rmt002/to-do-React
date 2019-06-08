import React,{ Component } from 'react';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export class ToDoEntry extends Component{
    constructor(props){
        super();
        this.mounted=false;
    }

    state={
        deleteElement:[],
    }
    
    componentWillMount=()=>{
        this.mounted=true
    }
    
    componentWillUnmount=()=>{
        this.mounted=false
    }

    markAsDonehandler=(event)=>{
        this.props.markDone(event.target.checked,this.props.data.id)
    }

    confirmDelete=()=>
    {
        let newElement=[];
        newElement.push(
            <span key={10}className="deleteConfirm">
                <OverlayTrigger placement='top' overlay={<Tooltip>Delete Task</Tooltip>}>
                    <i className="material-icons trash" onClick={this.handleDelete}>delete</i>
                </OverlayTrigger>
            </span>
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
        this.props.delete(this.props.data.id)
    }


    render(){
        return(
            <div onClick={this.confirmDelete} >
                <input type="checkbox" checked={this.props.data.done} onChange={this.markAsDonehandler} className="checkbx"></input>
                <span className="tododata" style={{
                    textDecoration:this.props.data.done?'line-through':'none',
                    }}>{this.props.data.description}</span>
                {this.state.deleteElement}
            </div> 
        )
    }
}
export default ToDoEntry

//style={{backgroundColor:(this.state.deleteElement[0])?'red':'white'}}