import { makeVar } from '@apollo/client'
interface Task {
  title: string
}
export const todoVar = makeVar<Task[]>([])
