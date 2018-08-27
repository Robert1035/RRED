import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bulma/css/bulma.css';
import reducer from './reducer';



const initialState = {count:0};

let updateState = (state,action) => {
    switch (action.type){
        case 'INCREMENT' : return {count:state.count + action.amount};
        case 'DESCREMENT' : return {count:state.count + action.amount};
        case 'RESET' : return {count:0};
        default: return state;
    }
};

const incrementAction = {type:'INCREMENT',amount: 1};
const decrementAction = {type:'DECREMENT',amount: 1};
const resetAction = {type:'RESET'};

const store = new Store(updateState,initialState);


class task extends React.Component {
    constructor(props) {
        super(props);
        this.increment= this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)

    }

    componentDidMount(){
        store.subcribe(() => this.forceUpdate())
    }

    increment(){
        store.update(incrementAction)
    }

    decrement(){
        store.update(decrementAction)
    }

    reset(){
        store.update(resetAction)
    }

    render() {
        return (
            <div className="counter">
                <span className="span">{store.state.count}</span>
                <div className="buttons">
                    <button className="decrement" onclick={this.decrement}>-</button>
                    <button className="increment" onClick={this.increment}>+</button>
                    <button className="reset" onClick={this.reset}>R</button>

                </div>

            </div>
        );
    }
}

export default task;

