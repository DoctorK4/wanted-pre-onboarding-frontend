import { useState } from 'react'
import TaskUnit from '../components/taskUnit';

function ToDo () {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addToDo = (e) => {
    e.preventDefault()
    setTaskList([...taskList, task])
    setTask('');
    console.log(taskList) 
  } 

  return (
    <>
      <form onSubmit={addToDo}>
        <input data-testid="new-todo-input" type="text" placeholder="할일을 입력하세요" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button data-testid="new-todo-add-button" type="submit">추가</button>
      </form>
      <ul>
        {taskList.map((task)=>(<TaskUnit task={task}/>))}
      </ul>
    </>
  )
}

export default ToDo;