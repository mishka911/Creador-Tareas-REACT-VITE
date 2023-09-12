import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export default function Form() {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const {createTask} = useContext(TaskContext)

const handleSubmit = (e) => {
    e.preventDefault();
     createTask({
      title,
      description
     })
   setTitle('')//limpiar el formulario
   setDescription('')  
}
  return (
    <div className='max-w-md mx-auto'>
    <form onSubmit={handleSubmit} className='bg-cyan-800 p-10 mb-4 rounded-md'>
      <h1 className='text-center text-2xl font-bold text-white mb-4 capitalize'>Crea tu tarea</h1>
        <input placeholder="Escribe tu tarea"
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        className='bg-slate-300 p-3 w-full mb-2'
        autoFocus//para que el cursos vuelva a esta casilla
        />

        <textarea placeholder='Escriba la descripcion de la tarea' onChange={e => setDescription(e.target.value)} 
        value={description}
        className='bg-slate-300 p-3 w-full mb-2'
        ></textarea>
        <button className='bg-orange-600 px-3 py-1 text-white rounded-md hover:bg-amber-400'>
            Guardar
        </button>
      </form>
    </div>
   
  )
}
//max-w-md de la margenes predeterminados en lo ancho, w-full es que baje a lo ancho
