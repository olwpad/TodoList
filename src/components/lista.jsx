import React from 'react'
import { MostarTarea } from './mostarTarea'

export const Lista = ({todo,setodo}) => {
  return (
    <div>
        <ul>
       { todo.map((tarea)=>
        < MostarTarea  key={tarea.id} descripcion={tarea.descripcion} 
         setodo={setodo} todo={todo} id={tarea.id} done={tarea.done}
         title={tarea.title} />
        )}
      </ul>
    </div>
    
    
  )
}
