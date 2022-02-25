import { Todo } from './types'

export type Requests = {
  getTodo: {
    id: number
  }
  createTodo: Omit<Todo, 'id'>
  // END OF REQUEST_TYPES
}
