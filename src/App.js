import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {ToDoApp} from './components/To-Do-App'

function App() {
  return (
    <div >
      <div className="header">
        <h2 >To-Do App</h2>
      </div>
      <div className="App">
        <ToDoApp/>
      </div>
    </div>
  );
}

export default App;
