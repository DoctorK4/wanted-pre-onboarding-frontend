import { useState } from "react"

export default function ToDo({index, inputValue, toDos, setToDos, isCompleted}) {
  const [edit, setEdit] = useState(false);
  const [newInputValue, setNewInputValue ] = useState(inputValue);

  // 수정모드 전환
  const editToDo = (index) => {
    toDos[index] = newInputValue;
    setToDos([...toDos]);
    setEdit(false);
  }
  
  // 수정모드 종료 (수정취소)
  const cancelEdit = () => {
    setEdit(false)
    setNewInputValue(inputValue);
  }
  
  // todo 삭제
  const deleteToDo = (index) => {
    setToDos((toDos)=>{
      return toDos.filter((prev, ind) => ind !== index);
    });
  }
  return (
    <>
      <li>
        { !edit ? 
        // 수정모드 off
        <>
          <label htmlFor="addToDo">
            <input type="checkbox" id="addToDo" checked={isCompleted}/>
            <span>{inputValue}</span>
          </label>
          <button data-testid="modify-button" onClick={()=>setEdit(true)}>수정</button>
          <button data-testid="delete-button" onClick={()=> deleteToDo(index)}>삭제</button> 
        </>
        : 
        // 수정모드 on
        <form onSubmit={() => editToDo(index)} id="editForm">
          <input data-testid="modify-input" value={newInputValue} form="editForm" onChange={(e) => setNewInputValue(e.target.value)}/>
          <button data-testid="submit-button" type="submit">제출</button>
          <button data-testid="cancel-button" type="button" onClick={cancelEdit}>취소</button>
        </form> 
        }
      </li>
    </>
  )
}