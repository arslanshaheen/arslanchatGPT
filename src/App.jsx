import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-5 h-screen'>
        <div className='col-span-1 bg-zinc-800 '>
          here arslan
        </div>
        <div className='col-span-4'></div>
      </div>
    </>
  )
}

export default App
