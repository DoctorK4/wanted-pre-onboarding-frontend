import { useState } from "react"

export default function ToDo({index, inputValue, toDos, setToDos}) {
  const [edit, setEdit] = useState(false);
  const [newToDo, setNewToDo ] = useState(inputValue);
  const editToDo = (index) => {
    toDos[index] = newToDo;
    setToDos([...toDos]);
    setEdit(false);
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
        <label htmlFor="addToDo">
          <input type="checkbox" id="addToDo"/>
          <span>{inputValue}</span>
        </label>
        <button data-testid="modify-button" onClick={()=>setEdit(true)}>수정</button>
        <button data-testid="delete-button" onClick={()=> deleteToDo(index)}>삭제</button> 
        </>
          : 
       
        <form onSubmit={()=>editToDo(index)} id="editForm">
          <input data-testid="modify-input" value={newToDo} form="editForm" onChange={(e)=>setNewToDo(e.target.value)}/>
          <button data-testid="submit-button" type="submit">제출</button>
          <button data-testid="cancel-button" type="button" onClick={()=>setEdit(false)}>취소</button>
        </form> 
        }
      </li>
    </>
  )
}