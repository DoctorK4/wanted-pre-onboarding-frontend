import { useEffect, useState } from 'react';
import ToDo from '../components/ToDo';
import '../index.css';
import { toDoApi } from '../apis/todo';
import { getToken } from '../util/getToken';

function ToDoList() {
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);
  const getToDos = async () => {
    const response = await toDoApi.fetchTodo();
    setToDos(response.data);
    console.log(response);
  };

  const addToDo = async () => {
    await toDoApi.createTodo(inputValue);
    getToDos();
  };

  const deleteToDo = async todo => {
    await toDoApi.deleteTodo(todo.id);
    getToDos();
  };

  const setCheck = async todo => {
    await toDoApi.updateTodo(todo.id, todo.todo, !todo.isCompleted)
    getToDos();
  };

  useEffect(() => {
    if (getToken) getToDos();
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
