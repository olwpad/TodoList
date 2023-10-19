import { useState } from 'react'
import { Lista } from './components/lista'

function App() {
  const [count, setCount] = useState("")
  const [title, setTitle] = useState("")
  const[todo,setodo]=useState([])

  const agregar=()=>{
    if(count.trim()=="" || title.trim()=="" )return;
     let objeto={
      id:new Date().getTime(),
      title:title,
      descripcion:count,
      done:false
     }
      setodo([...todo,objeto])
      setCount("")
     
  }
  return (
    <main className='App'>
      <h1>TodoList <small>Pendientes: {todo.filter(e => !e.done).length}</small></h1>
      <div className='container'>
        <input
          type="text"
          placeholder='Titulo'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          type="text"
          placeholder='Descripción'
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button onClick={agregar}>Agregar</button>
      </div>
      <Lista todo={todo} setodo={setodo} />
      </main>
 
  );
  
}

export default App
