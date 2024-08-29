import React, { useRef, useState } from 'react'
import { FaPlus } from 'react-icons/fa'

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
      <div className="flex m-2 rounded-2xl overflow-hidden border border-zinc-400 bg-gray-800">
        <input
          className="bg-gray-800 p-1 pl-2"
          placeholder="Nova Tarefa"
          type="text"
          onChange={onChangeHandler}
          value={todo}
          ref={inputRef}
          onKeyPress={onEnterPress}
        />
        <button
          className="py-1 px-5 cursor-pointer border-l border-zinc-400"
          onClick={onClickHandler}
        >
          <FaPlus />
        </button>
      </div>
    </>
  )
}
