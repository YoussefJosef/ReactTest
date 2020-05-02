import React from 'react'


const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
    todos.map(todo => {
        return (
            <div className="collection-item" key={todo.id}>
                <span onClick={ () => {deleteTodo(todo.id)} }>{todo.content}</span>
            </div>
        )
    })
    ) : (
        <p className="center"> no todo's left ! add some.</p>
    )
return (
<div className="todos collection">
    <h4 className="center">Todo's List :</h4>
    {todoList}
</div>

)
}

export default Todos;