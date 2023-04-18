import { useEffect, useState } from 'react'
import axios from "axios";

const token = localStorage.getItem('token');
const host = 'https://www.pre-onboarding-selection-task.shop/';
const toDoAPI = axios.create({
  baseURL: host,
  headers: {
    'Content-Type' : 'application/json',
    Authorization : `Bearer ${token}`,
  },
})

function ToDoList () {
  // 상태 선언
  // const [createToDo, setCreateToDo] = useState({
  //   content: "",
  //   iscompleted: false,
  // });
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);

  
  // 서버에서 todo data를 받아와 toDos에 갱신
  const getToDos = async () => {
    const response = await toDoAPI.get('./todos')
    console.log(response);
    setToDos(response.data)
  }

  // 새로 입력받은 todo를 서버에 post, 화면의 toDos 갱신
  const addToDo = async () => {
    const createNewToDo = {
      todo: inputValue,
      isCompleted : false
    }
    const response = await toDoAPI.post('./todos', createNewToDo);
    console.log(response);
    await getToDos();
  }

  const setCheck = async (todo) => {
    await toDoAPI.put(`./todos/${todo.id}`, {
      todo : todo.todo,
      isCompleted : !todo.isCompleted 
    });
    await getToDos();
  }

  // Side Effect 
  useEffect(()=>{
    if (token) {
      getToDos();
    }
    return
  }, [])

  return (
    <>
      <form onSubmit={addToDo}>
        <input data-testid="new-todo-input" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button data-testid="new-todo-add-button" type="submit">추가</button>
      </form>

      {toDos.length === 0 ? <p>todolist is empty</p> 
      : 
      <ul>
        {toDos.map((todo, index) => 
        <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => setCheck(todo)}/>
            <span>{todo.todo}</span>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button">삭제</button>
          </label>
        </li>
        )}
      </ul>}
    </>

  )
}

export default ToDoList;