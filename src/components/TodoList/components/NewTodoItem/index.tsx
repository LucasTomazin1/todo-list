import React, { useRef, useState } from 'react'
import { TodoList } from '../..'

interface NewTodoItemProps {
  addTodo: (text: string) => void
}
export const NewTodoItem: React.FC<NewTodoItemProps> = () => {
  const [todo, setTodo] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [todoList, setTodoList] = useState<{ text: string; isDone: boolean }[]>(
    [],
  )

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const onAddHandler = (todo: string) => {
    if (todo === '') return
    setTodoList([...todoList, { text: todo, isDone: false }])
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
