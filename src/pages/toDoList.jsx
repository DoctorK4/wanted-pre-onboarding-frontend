import { useEffect, useState } from 'react';
import axios from 'axios';
import ToDo from '../components/ToDo';
import '../index.css';

const token = localStorage.getItem('token');
const host = 'https://www.pre-onboarding-selection-task.shop/';

export const toDoAPI = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

function ToDoList() {
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);
  const getToDos = async () => {
    const response = await toDoAPI.get('./todos');
    setToDos(response.data);
    console.log(response);
  };

  const addToDo = async () => {
    const createNewToDo = {
      todo: inputValue,
      isCompleted: false,
    };
    const response = await toDoAPI.post('./todos', createNewToDo);
    getToDos();
    console.log(response);
  };

  const deleteToDo = async todo => {
    const response = await toDoAPI.delete(`./todos/${todo.id}`);
    console.log(response);
    getToDos();
  };

  const setCheck = async todo => {
    await toDoAPI.put(`./todos/${todo.id}`, {
      todo: todo.todo,
      isCompleted: !todo.isCompleted,
    });
    getToDos();
  };

  useEffect(() => {
    if (token) getToDos();
  }, []);

  return (
    <div className="bg-cyan-50 p-3 max-w-md mx-auto">
      <form onSubmit={addToDo} className="mt-4 flex text-center">
        <input
          data-testid="new-todo-input"
          value={inputValue}
          className="bg-transparent w-60 mr-20 border-b-2 border-gray-500 text-black ml-3 pl-2"
          placeholder="Insert todo"
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          data-testid="new-todo-add-button"
          type="submit"
          className="ml-5 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
        >   
          추가
        </button>
      </form>

      <ul className="flex flex-col">
        {toDos.map(todo => (
          <ToDo
            key={todo.id}
            todo={todo}
            deleteToDo={deleteToDo}
            setCheck={setCheck}
            getTodos={getToDos}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
