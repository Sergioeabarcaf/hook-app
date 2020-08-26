export interface Action {
  type: string
  payload: Todo
}

export interface Todo {
  id: number
  desc?: string
  done?: boolean
}

export interface TodoListProps {
  todos: Todo[]
  handleDelete: Function
  handleToggle: Function
}

export interface TodoListItemProps {
  todo: Todo
  index: number
  handleDelete: Function
  handleToggle: Function
}

export interface TodoAddProps {
  handleAddTodo: Function
}
