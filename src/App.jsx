import { useState } from 'react'
import { Lista } from './components/lista'

function App() {
  const [count, setCount] = useState("")
  const[todo,setodo]=useState([])



  const agregar=()=>{
    if(count.trim()=="")return;
     let objeto={
      id:new Date().getTime(),
      descripcion:count,
      done:false
     }
      setodo([...todo,objeto])
      setCount("")
     
  }
  return (
    <>
    <h1>TodoList</h1>
    <div>
      <input type="text"
      value={count}
      onChange={(event => setCount(event.target.value))}
      />
      <button onClick={agregar}>Agregar</button>
    </div>
      <Lista todo={todo} setodo={setodo} />
      
    </>
  )
}

export default App
