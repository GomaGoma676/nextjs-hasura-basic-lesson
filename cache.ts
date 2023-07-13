import { makeVar } from '@apollo/client'

interface Task {
  title: string
}

// todoのstateを格納する変数
export const todoVar = makeVar<Task[]>([])