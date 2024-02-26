import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface Itodo {
    todo: {
        id: number,
        text: string,
        isEdit: Boolean
    },
    deleteTodo: (id: number) => void,
    editTodo: (id: number) => void
}
const Todo: React.FC<Itodo> = ({ todo, deleteTodo, editTodo }) => {
    return (
        <div className='todo'>
            <p>{todo.text}</p>
            <div className='icons'>
                <FaEdit
                    size={20}
                    className='icon'
                    onClick={() => editTodo(todo.id)}
                />
                <MdDelete
                    size={20}
                    className='icon'
                    onClick={() => deleteTodo(todo.id)}
                />
            </div>
        </div>
    )
}

export default Todo
