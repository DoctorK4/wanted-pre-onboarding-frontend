import { useState } from "react"

export default function ToDo({index, inputValue, toDos, setToDos, isCompleted}) {
  const [edit, setEdit] = useState(false);
  const [newToDo, setNewToDo ] = useState(inputValue);

  // 수정모드 전환
  const editToDo = (index) => {
    toDos[index] = newToDo;
    setToDos([...toDos]);
    setEdit(false);
  }
  // todo 삭제
  const deleteToDo = (index) => {
    setToDos((toDos)=>{
      return toDos.filter((prev, ind) => ind !== index);
    });
  }
  // 수정모드 종료 (수정취소)
  const cancelEdit = () => {
    setEdit(false)
    setNewToDo(inputValue);
  }

  return (
    <>
      <li>
        { !edit ? 
        // 수정모드 전
        <>
          <label htmlFor="addToDo">
            <input type="checkbox" id="addToDo" checked={isCompleted}/>
            <span>{inputValue}</span>
          </label>
          <button data-testid="modify-button" onClick={()=>setEdit(true)}>수정</button>
          <button data-testid="delete-button" onClick={()=> deleteToDo(index)}>삭제</button> 
        </>
        : 
        // 수정모드 후
        <form onSubmit={() => editToDo(index)} id="editForm">
          <input data-testid="modify-input" value={newToDo} form="editForm" onChange={(e) => setNewToDo(e.target.value)}/>
          <button data-testid="submit-button" type="submit">제출</button>
          <button data-testid="cancel-button" type="button" onClick={cancelEdit}>취소</button>
        </form> 
        }
      </li>
    </>
  )
}