import { useState } from 'react'
import { TodoList } from '..'
import { NewTodoItem } from '../components/NewTodoItem'
import { TodoItemInterface } from '../../../types'

export const TodoManager = () => {
  const [todoList, setTodoList] = useState<TodoItemInterface[]>([])

  const addTodo = (text: string) => {
    if (text === '') return
    const newTodo: TodoItemInterface = { text, isDone: false }
    setTodoList([...todoList, newTodo])
  }

  const removeTodo = (index: number) => {
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }
  return (
    <div className="TodoApp">
      <NewTodoItem addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        removeTodo={removeTodo}
      />
    </div>
  )
}
