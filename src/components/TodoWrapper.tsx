import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'

interface Itodos {
    id: number,
    text: string,
    isEdit: Boolean
}

const TodoWrapper = () => {
    const [todos, setTodos] = useState<Itodos[]>([]);

    const addTodo = (enteredTodo: string) => {
        if (todos.find((todo) => todo.text === enteredTodo)) {
            console.log("EXITS");
            alert("Duplicate Todo occurred!")
            return;
        }
        setTodos([...todos, { id: Date.now(), text: enteredTodo, isEdit: false }]);
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const editTodo = (id: number) => {
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, isEdit: true } : todo
        )))
        console.log("clicked!")
    }

    const editTask = (id: number, editText: string) => {
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, text: editText, isEdit: false } : todo
        )))
    }

    return (
        <div className='todo_wrapper'>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo: Itodos) => (
                todo.isEdit ?
                    <EditTodoForm key={todo.id} editTask={editTask} todo={todo} /> :
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
            ))}
        </div>
    )
}

export default TodoWrapper
