import { useState } from 'react'

import './App.css'
import { URL } from './constant'
import Answer from './components/Answers'

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
     let dataString=response.candidates[0].content.parts[0].text
     dataString=dataString.split("* ")
     dataString=dataString.map((item)=>item.trim())
    //  console.log(dataString)
     setResult(dataString)
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
            {/* {result} */}
            <ul>
            {result && result.map((item,index)=>(
              <li className='text-left p-2'><Answer ans={item} key={index}/></li>
            ))}
            </ul>
            
            
            
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
