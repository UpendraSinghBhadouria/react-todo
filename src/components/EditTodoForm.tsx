import { useState } from "react"

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    editTask(todo.id, editValue);
  }

  return (
    <form className='todo_form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Enter your todo'
        onChange={handleChange}
        value={editValue}
      />
      <button type='submit'>Update Todo</button>
    </form>
  )
}

export default EditTodoForm;
