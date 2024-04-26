import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PutTogether from './components/PutTogether'
import PutTogether2 from './components/PutTogether2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PutTogether firstName = "DOE," lastName = "Jane" age = {45} Haircolor = "Black"></PutTogether>
     <PutTogether2 firstName = "Smith," lastName = "John" age = {88} Haircolor = "Black"></PutTogether2>
    </>
  )
}

export default App
