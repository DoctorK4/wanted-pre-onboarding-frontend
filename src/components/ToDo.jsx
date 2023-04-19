import { useState } from "react"

export default function ToDo({todo, deleteToDo, setCheck}) {
  
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <li key={todo.id}>
        {!editMode ?        
          <label>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => setCheck(todo)}/>
            <span>{todo.todo}</span>
            <button data-testid="modify-button" onClick={() => setEditMode(true)}>수정</button>
            <button data-testid="delete-button" onClick={() => deleteToDo(todo)}>삭제</button>
          </label>
          :
          <form>
            <input data-testid="modify-input"/>
            <button data-testid="submit-button">제출</button>
            <button data-testid="cancel-button">취소</button>
          </form>
        }
      </li>
    </>
  )
}