import { useEffect, useRef, useState } from "react"

interface Iprops {
  editTask: (id: number, editText: string) => void,
  todo: {
    id: number,
    text: string,
    isEdit: Boolean
  }
}

const EditTodoForm: React.FC<Iprops> = ({ editTask, todo }) => {

  const [editValue, setEditValue] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    editTask(todo.id, editValue);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  return (
    <form className='todo_form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Enter your todo'
        onChange={handleChange}
        value={editValue}
        ref={inputRef}
      />
      <button type='submit'>Update Todo</button>
    </form>
  )
}

export default EditTodoForm;
