export interface TodoItemProps {
  text: string
  isDone: boolean
  onToggle: () => void
  index: number
}

export const TodoItem: React.FC<TodoItemProps> = ({
  text,
  isDone,
  onToggle,
  index,
}) => {
  return (
    <li
      key={index}
      className={`flex flex-row gap-1 items-center ${
        isDone ? 'line-through opacity-70' : ''
      }`}
    >
      <input type="checkbox" checked={isDone} onChange={onToggle} />
      <p className="">
        {index + 1}- {text}
      </p>
      <button>x</button>
    </li>
  )
}
