import { useState } from 'react'
import UserContextProvided from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvided>
     <h1>Context Api</h1>
     <Login/>
     <Profile/>
    </UserContextProvided>
  )
}

export default App
