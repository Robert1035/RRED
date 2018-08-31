import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import TodoItem from "./Components/TodoItem";
import TodoList from './Components/TodoList'



class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div >
        <TodoList/>
        <TodoItem/>
            </div>
        );
    }
}



export default App;


