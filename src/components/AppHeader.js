import React, { Component } from 'react';
import darkSheet from '../sheets/darkMode';

export class AppHeader extends Component {
    constructor(props) {
        super()
    }

    state = {
        darkMode: false,
    }

    onToggle = () => {
        if(this.state.darkMode===false){
            this.darkMode()
        }
        else{
            this.removeDarkMode()
        }
        this.setState({
            darkMode:!this.state.darkMode
        })
    }

    darkMode=()=>{
        var style = document.createElement('style');
        style.id="inhouseDark"
        style.type = 'text/css';
        style.innerHTML = darkSheet
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    removeDarkMode=()=>{
        var sheet = document.getElementById('inhouseDark');
        sheet.disabled=true;
        sheet.parentElement.removeChild(sheet)
    }

    render() {
        return (
            <div className="header">
                <h2 className="headerText">To-Do App</h2>
                <i onClick={this.onToggle}  className="material-icons nightmode">brightness_medium</i>

            </div>
        )

    }
}

export default AppHeader
//style={{ color: `${this.state.toggleStyle}` }}
