import { Component, For } from "solid-js"

const App: Component = () => {
  return (
    <div>
      hello!!!
      <TodoList todoList={todos} />
    </div>
  )
}

const TodoList: Component<{ todoList: Todo[] }> = (props) => {
  return (
    <ul>
      <For each={props.todoList}>{(todo) => <li>{todo.text}</li>}</For>
    </ul>
  )
}

type Todo = {
  id: string
  text: string
  done: boolean
}

const todos = [
  { id: "1", text: "text 1", done: true },
  { id: "2", text: "text 2", done: true },
  { id: "3", text: "text 3", done: true },
]

export default App
