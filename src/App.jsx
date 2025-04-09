import { useState } from 'react'

import './App.css'
import { URL } from './constant'

function App() {
  const [question, setQuestion] = useState('')
  const [result, setResult]=useState(undefined)


 const payload={
  "contents": [{
    "parts":[{"text": question}]
    }]
   
}

  const askQuestion= async()=>{
    let response= await fetch(URL,{
      method:"POST",
      body:JSON.stringify(payload)
    })
     response = await response.json()
     console.log(response.candidates[0].content.parts[0].text)
     setResult(response.candidates[0].content.parts[0].text)
  }

  return (
    <>
      <div className='grid grid-cols-5 h-screen'>
        <div className='col-span-1 bg-zinc-800 '>
          here arslan
        </div>
        <div className='col-span-4 p-10'>
          <div className='container h-120 overflow-x-scroll'>
            <div className='text-white'>
            {result}
            </div>
            
          </div>
          <div className='bg-zinc-800 w-1/2 text-white p-1 pr-5 h-16 m-auto rounded-4xl border border-zinc-700 flex'>
            <input value={question} onChange={(event)=>setQuestion(event.target.value)} className='w-full h-full p-3 outline-none' type="text" placeholder='Ask me anythings '/>
            <button onClick={askQuestion}>Ask</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
