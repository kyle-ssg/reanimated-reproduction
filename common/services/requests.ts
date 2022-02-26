import { Todo } from './types'

export type Req = {
  getTodo: {
    id: number
  }
  createTodo: Omit<Todo, 'id'>
  updateTodo: Todo
  // END OF TYPES
}
