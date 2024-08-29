export interface TodoItemProps {
  text: string
  isDone: boolean
  onToggle: () => void
  index: number
  removeTodo: (index: number) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({
  text,
  isDone,
  onToggle,
  index,
  removeTodo,
}) => {
  return (
    <li
      key={index}
      className={`flex justify-between gap-1 items-center border-b border-zinc-400 ${
        isDone ? 'line-through opacity-70' : ''
      }`}
    >
      <div className="flex gap-1">
        <input type="checkbox" checked={isDone} onChange={onToggle} />
        <p className="">
          {index + 1}- {text}
        </p>
      </div>
      <div>
        <button onClick={() => removeTodo(index)} className="text-red-500">
          X
        </button>
      </div>
    </li>
  )
}
