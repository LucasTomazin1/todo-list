import { useState } from 'react'
import { NewTodoItem } from '../TodoList/components/NewTodoItem'
import { TodoList } from '../TodoList'
import { TodoItem } from '../../types'
export const TodoManager = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([])

  const addTodo = (text: string) => {
    if (text === '') return
    const newTodo: TodoItem = { text, isDone: false }
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
