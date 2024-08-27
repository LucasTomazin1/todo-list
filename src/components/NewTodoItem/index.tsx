import { useState } from 'react'

export const NewTodoItem: React.FC = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState<string[]>([])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }
  const onClickHandler = () => {
    onAddHandler(todo)
  }

  const onAddHandler = (todo: string) => {
    if (todo === '') return
    setTodoList([...todoList, todo])
    console.log(todoList)
  }

  return (
    <div>
      <h2>Nova Tarefa</h2>
      <input type="text" onChange={onChangeHandler} />
      <button
        className="border-2 border-black rounded-md px-2 cursor-pointer"
        onClick={onClickHandler}
      >
        Adicionar
      </button>
    </div>
  )
}
