import { useEffect, useState } from 'react'
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

  // useEffect(()=>{
  //   getToDos();
  // },[])

  // // DB에서 할일 목록을 가져오는 함수
  // const getToDos = async () => {
  //   let newdata = await api.get('/todos').then((res)=>res.data);
  //   setToDos([...toDos, newdata]);
    // .then((res)=> res.data.map(
    //   (item, index) => 
    //   <ToDo 
    //     key={index} 
    //     index={index} 
    //     inputValue={item.todo} 
    //     toDos={toDos} 
    //     setToDos={setToDos} 
    //     isCompleted={item.isCompleted}
    //   />)
 

  const addToDo = async (e) => {
    e.preventDefault();
    // DB의 할일 목록 리스트에 새 할일 추가
    await api.post('/todos',{
      "id": toDos.findIndex((item)=>item===inputValue),
      "todo": inputValue,
      "isCompleted": false,
    })
    .then((res) => {
      
      setToDos([...toDos, inputValue]);

      // 입력창 초기화
      setInputValue('');
    })
    .catch((err)=>console.log(err));
  } 

  return (
    <>
      <form onSubmit={addToDo}>
        <input 
          data-testid="new-todo-input" 
          type="text" 
          placeholder="할일을 입력하세요" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          />
        <button 
          data-testid="new-todo-add-button" 
          type="submit"
          disabled={(inputValue) ? false : true}
        >
          추가
        </button>
      </form>
      <ul>
        {toDos.length === 0 ? 
          <li>to-do-list is empty</li> 
        : 
          toDos.map((inputValue, index) => 
            (<ToDo 
              key={index} 
              index={index} 
              inputValue={inputValue} 
              toDos={toDos} 
              setToDos={setToDos} 
            />)
          )
        }
      </ul>
    </>
  )
}

export default ToDoList;