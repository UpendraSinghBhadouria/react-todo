import "./app.scss";
import TodoWrapper from './components/TodoWrapper'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <TodoWrapper />
      <ToastContainer />
    </div>
  )
}

export default App
