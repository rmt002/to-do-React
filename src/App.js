import React from 'react';
import './App.css';
import {ToDoApp} from './components/To-Do-App'
import AppHeader from './components/AppHeader';

function App() {  
  return (
    <div >
      <AppHeader/>
      <div className="App">
        <ToDoApp/>
      </div>
    </div>
  );
}

export default App;
