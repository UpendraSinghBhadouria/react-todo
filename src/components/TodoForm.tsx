import { useEffect, useRef, useState } from "react"

interface Iprops {
    addTodo: (enteredTodo: string) => void
}

const TodoForm: React.FC<Iprops> = ({ addTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTodo(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        enteredTodo && addTodo(enteredTodo);
        setEnteredTodo('');
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <form className='todo_form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Enter your todo'
                value={enteredTodo}
                onChange={handleChange}
                ref={inputRef}
            />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default TodoForm
