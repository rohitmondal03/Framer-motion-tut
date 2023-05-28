import { useState } from 'react'
import './App.css'

// COMPONENTS
import Tut1 from './components/Tut1'

// FRAMER MOTION TUT
import { AnimatePresence } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimatePresence>
        <Tut1 />
      </AnimatePresence>
    </>
  )
}

export default App
