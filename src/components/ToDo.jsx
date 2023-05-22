import { useState } from 'react';
import { toDoAPI } from '../pages/toDoList';

export default function ToDo({ todo, deleteToDo, setCheck, getToDos }) {
  const [editMode, setEditMode] = useState(false);
  const [newToDo, setNewToDo] = useState(todo.todo);

  const editToDo = async () => {
    const response = await toDoAPI.put(`./todos/${todo.id}`, {
      todo: newToDo,
      isCompleted: todo.isCompleted,
    });
    console.log(response);
    getToDos();
    setEditMode(false);
  };

  const cancelEdit = () => {
    setEditMode(false);
    setNewToDo(todo.todo);
  };

  return (
    <>
      <li className="flex flex-row m-3 p-0" key={todo.id}>
        {!editMode ? (
          <label className="flex h-12 leading-1 items-center">
            <input 
              className="h-5 w-5" 
              type="checkbox"
              checked={todo.isCompleted} 
              onChange={() => setCheck(todo)} 
            />
            <span className="text-xl text-gray-400 w-60 ml-6">{todo.todo}</span>
            <button 
              className="flex mr-2 text-blue-500 border-2 border-blue-500 p-2 rounded-lg" 
              data-testid="modify-button" 
              onClick={() => setEditMode(true)}
              >
              수정
            </button>
            <button 
              className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg" 
              data-testid="delete-button" 
              onClick={() => deleteToDo(todo)} 
              type="button"
            >
              삭제
            </button>
          </label>
        ) : (
          <form className="flex flex-row" key={todo.id} onSubmit={editToDo} id="editForm">
            <input
              className="w-60 text-xl border-b-2 border-gray-500 text-black"
              data-testid="modify-input"
              value={newToDo}
              form="editForm"
              onChange={e => setNewToDo(e.target.value)}
            />
            <button 
              className="flex text-purple-500 border-2 border-purple-500 p-2 rounded-lg ml-11" 
              data-testid="submit-button" 
              type="submit"
              >
              제출
            </button>
            <button 
              className="flex text-gray-500 border-2 border-gray-500 p-2 rounded-lg ml-2" 
              data-testid="cancel-button" 
              type="button" 
              onClick={cancelEdit}
              >
              취소
            </button>
          </form>
        )}
      </li>
    </>
  );
}
