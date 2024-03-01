import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
import { toast } from 'react-toastify'

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
            toast.info("Duplicate Todo occurred!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
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
