import React from 'react'

export const MostarTarea = ({descripcion,setodo,id,todo,done}) => {

    const funcionEliminar=()=>{
    let result=todo.filter((todo)=>{
       return todo.id !==id;
    }
    )
    setodo(result)
    }

    const MarcarComoHecho=()=>{
          let result=todo.map((todo)=>{
            if(todo.id==id){
                todo.done=!todo.done;
               
            }
            return todo;
          })
          setodo(result)
    }


  return (
    <li>
        <span className={`${(done )? "linea":"nada"}` }  onClick={MarcarComoHecho}>{descripcion}</span>
        <button 
         onClick={funcionEliminar}
        >x</button>
    </li>  
  )
}
