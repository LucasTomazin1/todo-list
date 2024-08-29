export interface TodoItemInterface {
  text: string
  isDone: boolean
}

export interface TodoListInterface {
  todoList: TodoItemInterface[]
}

export interface BoardInterface {
  id: number
  title: string
  isTodo?: boolean
  isNote?: boolean
}
