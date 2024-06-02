import { useState } from 'react'
import Todo from './components/todo'
import AddTodo from './components/addtodo'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1>Learn about redux toolkit</h1>
  <AddTodo/>
   <Todo/>

   </>
  )
}

export default App
