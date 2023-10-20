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
      setTitle("")
     
  }
  return (
<main className='App'>
  <h1>TodoList <small>Pendientes: {todo.filter(e => !e.done).length}</small></h1>
  <section>
    <div className='container'>
      <label htmlFor="title">Título:</label>
      <input
        type="text"
        id="title"
        placeholder='Ingrese el título'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="description">Descripción:</label>
      <textarea
        type="text"
        id="description"
        placeholder='Ingrese la descripción'
        value={count}
        onChange={(event) => setCount(event.target.value)}
      />
      <button className='agregar' onClick={agregar}>Agregar</button>
    </div>
    <div className='container2'>
      <Lista todo={todo} setodo={setodo} />
    </div>
  </section>
</main>

 
  );
  
}

export default App
