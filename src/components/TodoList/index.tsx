import React from 'react'
import { TodoItem } from './components/TodoItem'

interface TodoListProps {
  todoList: { text: string; isDone: boolean }[]
  setTodoList: React.Dispatch<
    React.SetStateAction<{ text: string; isDone: boolean }[]>
  >
}

export const TodoList: React.FC<TodoListProps> = ({
  todoList,
  setTodoList,
}) => {
  const handleCheckboxChange = (index: number) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? { ...item, isDone: !item.isDone } : item,
    )
    setTodoList(updatedTodoList)
  }

  const doneCount = todoList.filter((todo) => todo.isDone).length

  return (
    <div className="flex flex-col p-2">
      <h2>Lista de Tarefas</h2>
      <ul>
        {todoList.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            isDone={todo.isDone}
            onToggle={() => handleCheckboxChange(index)}
            index={index}
          />
        ))}
      </ul>
      {todoList.length > 0 && (
        <p className="text-sm">
          Tarefas concluídas: {doneCount} / {todoList.length}
        </p>
      )}
    </div>
  )
}
