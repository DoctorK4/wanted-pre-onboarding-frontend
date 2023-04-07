
export default function TaskUnit({task}) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{task}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  )
}