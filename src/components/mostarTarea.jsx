import React, { useState } from 'react'

export const MostarTarea = ({descripcion,setodo,id,todo,done,title}) => {
  const [first, setfirst] = useState(true)
  const[content, setContent]= useState(title)
  const[parrafo, setParrafo]= useState(descripcion)


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

    const funcioneditar=()=>{
      let result=todo.map((todo)=>{
        if(todo.id==id){
            todo.title=content,
            todo.descripcion=parrafo;
           
        }
        return todo;
      })
      setodo(result)
      setfirst(true)
    }


    return (
      <li>
       
        {first ? (
          <div className='descripcion-container'>
            
            <span className={`${done ? "linea" : "nada"}`} onClick={MarcarComoHecho}>{title}</span>
            <p>{descripcion}</p>
            <button className='eliminar' onClick={funcionEliminar}><i className="fas fa-trash-alt"></i></button>
            <button onClick={() => setfirst(false)}><i className="fas fa-edit"></i></button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder='Titulo'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <textarea
              type="text"
              placeholder='Descripcion'
              value={parrafo}
              onChange={(e) => setParrafo(e.target.value)}
            />
            <button onClick={funcioneditar}><i className="fas fa-check"></i></button>
          </div>
        )}
      </li>
    );
    
}
