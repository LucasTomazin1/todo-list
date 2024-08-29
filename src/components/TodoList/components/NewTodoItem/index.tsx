import React, { useRef, useState } from 'react'

interface NewTodoItemProps {
  addTodo: (text: string) => void
}
export const NewTodoItem: React.FC<NewTodoItemProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const onAddHandler = (todo: string) => {
    if (todo === '') return
    addTodo(todo)
    setTodo('')
    inputRef.current?.focus()
  }

  const onClickHandler = () => {
    onAddHandler(todo)
  }

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddHandler(todo)
    }
  }

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
    </>
  )
}
