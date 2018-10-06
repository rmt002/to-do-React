import React from "react";
import ReactDOM from "react-dom";
import './bootstrap/dist/css/bootstrap.css';
import "./index.css";
import ToDo from "./todo";



var destination =document.querySelector("#container");

ReactDOM.render(<div><ToDo /></div>,destination);
