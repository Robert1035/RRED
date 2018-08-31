import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import TodoItem from "./TodoItem";
import {addTodo} from '../Actions/Actions'


class TodoList extends Component{




    render(){
        console.log(this.props);
        return(

            <div>
                <ul>
                    {this.props.todos.map(t => <TodoItem key={t.id} title={t.title}/>)}
                     </ul>
                <button className="btn-outline-info" onClick={this.addTodo}>add new todo </button>
            </div>
        )
    }
    addTodo = () => this.props.add();

}


TodoList.propTypes = {};

let mapStateToProps = (state) =>{
    return{
        todos: state
    }
};

let mapDispatchToProps=(dispatch) =>{
    return{
        add: () => dispatch(addTodo())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
