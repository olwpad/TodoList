import React from 'react'
import { MostarTarea } from './mostarTarea'

export const Lista = ({todo,setodo}) => {
  return (
    <div>
        <ul>
       { todo.map((tarea)=>
        < MostarTarea  key={tarea.id} setodo={setodo} todo={todo} {...tarea} />
        )}
      </ul>
    </div>
    
    
  )
}
