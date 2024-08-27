import { useRef, useState } from 'react'

export const NewTodoItem: React.FC = () => {
  const [todo, setTodo] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [todoList, setTodoList] = useState<{ text: string; isDone: boolean }[]>(
    [],
  )
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }
  const onClickHandler = () => {
    onAddHandler(todo)
  }

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddHandler(todo)
    }
  }

  const onAddHandler = (todo: string) => {
    if (todo === '') return
    setTodoList([...todoList, { text: todo, isDone: false }])
    setTodo('')
    inputRef.current?.focus()
  }

  const handleCheckboxChange = (index: number) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? { ...item, isDone: !item.isDone } : item,
    )
    setTodoList(updatedTodoList)
  }

  const doenedCount = todoList.filter((todo) => todo.isDone).length

  return (
    <>
      <div className="p-2">
        <input
          placeholder="Nova Tarefa"
          type="text"
          onChange={onChangeHandler}
          value={todo}
          ref={inputRef}
          onKeyPress={onEnterPress}
        />
        <button
          className="border-2 border-black rounded-md px-2 cursor-pointer"
          onClick={onClickHandler}
        >
          Adicionar
        </button>
      </div>

      <div className="flex flex-col p-2">
        <h2>Lista de Tarefas</h2>
        <ul>
          {todoList.map((todo, index) => (
            <li
              key={index}
              className={`flex flex-row gap-1 items-center ${
                todo.isDone ? 'line-through opacity-70' : ''
              }`}
            >
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleCheckboxChange(index)}
              />
              <p className="">
                {index + 1}- {todo.text}
              </p>
            </li>
          ))}
        </ul>
        {todoList.length > 0 && (
          <p className="text-sm">
            Tarefas concluídas: {doenedCount} / {todoList.length}
          </p>
        )}
      </div>
    </>
  )
}
