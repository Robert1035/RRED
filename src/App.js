import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bulma/css/bulma.css'
import reducer from './reducer'
import task from './task'



class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div >
            <reducer/>
            <task/>
            </div>
        );
    }
}
export default App;


