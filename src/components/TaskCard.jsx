import { useContext } from "react"; //para poder usar el conext
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  /*const valor = useContext (TaskContext)// ese es el nombre del contexto y con el use ya lo puedo usar

  console.log (valor)*/

  const {deleteTask} = useContext(TaskContext)
  return (
    <div className="bg-teal-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-950 font-semibold text-lg">{task.description}</p>
      <button className="bg-yellow-600 px-2 py-1 rounded-md mt-4 hover:bg-red-600" onClick={() => deleteTask(task.id)}>
        Eliminar Tarea
      </button>
    </div>
  );
}

//bg es el fondo, rounde-md es los bordes redondeados, text-xl es para agrandar la letra, capitalize es para que empiece mayuscula, text-sm es para encoger la letra, p es el padding, px es padding para los lados, py es para arriba y mt es el margin top