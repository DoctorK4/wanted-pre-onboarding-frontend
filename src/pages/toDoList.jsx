import { useState } from 'react'
import ToDo from '../components/ToDo';
import axios from "axios";

const token = localStorage.getItem('token');
const host = 'https://www.pre-onboarding-selection-task.shop/';
const api = axios.create({
  baseURL: host,
  headers: {
    'Content-Type' : 'application/json',
    Authorization : `Bearer ${token}`,
  },
})

function ToDoList () {
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);

  const addToDo = async (e) => {
    e.preventDefault();
    setToDos([...toDos, inputValue]);
    setInputValue('');
    // 입력창 초기화
    await api.post('/todos',{
      "id": 1,
      "todo": inputValue,
      "isCompleted": false,
      "userId": toDos.findIndex((item)=>item===inputValue),
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err)=>console.log(err));
  } 

  return (
    <>
      <form onSubmit={addToDo}>
        <input data-testid="new-todo-input" type="text" placeholder="할일을 입력하세요" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button data-testid="new-todo-add-button" type="submit">추가</button>
      </form>
      <ul>
        {toDos.map((inputValue, index)=>(<ToDo key={index} index={index} inputValue={inputValue} toDos={toDos} setToDos={setToDos}/>))}
      </ul>
    </>
  )
}

export default ToDoList;