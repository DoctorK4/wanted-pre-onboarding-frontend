import { useState } from 'react'
import ToDo from '../components/taskUnit';

function ToDoList () {
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);

  const addToDo = (e) => {
    e.preventDefault()
    setToDos([...toDos, inputValue])
    setInputValue('');
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