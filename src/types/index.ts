export interface TodoItemInterface {
  text: string
  isDone: boolean
}

export interface TodoListInterface {
  todoList: TodoItemInterface[]
}

export interface BoardInterface {
  id: number
  tittle: string
  isTodo?: boolean
  isNote?: boolean
}
