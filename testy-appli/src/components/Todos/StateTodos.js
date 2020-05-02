import React, { Component } from 'react';
import Todos from './Todos';
import FormTodos from './FormTodos';

class StateTodos extends Component {
    state = {
        todos: [
            {id:1, content: 'buy some protein'},
            {id:2, content: 'play with turtles'},
            {id:3, content: 'go ahead, alry ?'},
            {id:4, content: 'easy peasy ....'},
        ]
    }
deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => {
        return todo.id !== id;
    })
    this.setState({
        todos
    })
}
addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
        todos
    })
}
  render(){
    return (
        <div className="StateTodos container">
            <h1 className="center blue-text">Todo's</h1>
            <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo} />
            <FormTodos addTodo={this.addTodo}></FormTodos>
        </div>   
         );
  }
}

export default StateTodos;
