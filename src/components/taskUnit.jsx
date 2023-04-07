import { useState } from "react"

export default function ToDo({index, inputValue, toDos, setToDos}) {
  const [edit, setEdit] = useState(false);
  const [newToDo, setNewToDo ] = useState(inputValue);
  const editToDo = () => {
    
    setEdit(false);
    setNewToDo(inputValue);
  }

  const deleteToDo = (index) => {
    setToDos((toDos)=>{
      return toDos.filter((prev, ind) => ind !== index);
    });
  }

  return (
    <>
      <li>
        { !edit ? 
        <>
        <label>
          <input type="checkbox" />
          <span>{inputValue}</span>
        </label>
        <button data-testid="modify-button" onClick={()=>setEdit(true)}>수정</button>
        <button data-testid="delete-button" onClick={()=> deleteToDo(index)}>삭제</button> 
        </>
          : 
       
        <form onSubmit={editToDo}>
          <input data-testid="modify-input" value={newToDo} onChange={(e)=>setNewToDo(e.target.value)}/>
          <button data-testid="submit-button" type="submit">제출</button>
          <button data-testid="cancel-button" type="button" onClick={()=>setEdit(false)}>취소</button>
        </form> 
        }
      </li>
    </>
  )
}