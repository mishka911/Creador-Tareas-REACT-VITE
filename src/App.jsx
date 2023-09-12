import Form from "./components/Form"
import TaskList from "./components/TaskList"

function App(){

  
  return(
    <main className="bg-slate-950 h-screen">
      <div className="container mx-auto p-10">
      <Form />
      <TaskList />
      </div>
    </main>
  )
}

export default App
//h-screen es para que coja toda la pantalla, mx-auto que se agregue los margenes automatico y container es para que todo este contenido en una caja y darle mas formatos