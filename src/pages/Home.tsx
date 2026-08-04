import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

interface Todo {
  id: number,
  title: string,
  description: string
}

function Home() {

  const [data, setData] = useState<Todo[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")

    setData(tasks);
  }, [])

  const handleEdit = (id: number) => {
    const editTask = data.find((task) => task.id == id)

    localStorage.setItem("editTask", JSON.stringify(editTask));
    navigate('/add')
  }

  const hadnleDelete = (id: number) => {
    const updatedTasks = data.filter((task) => task.id !== id)

    setData(updatedTasks)

    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 h-screen grid grid-cols-4 gap-5 p-5">
        {data.map((task) => (
          <div key={task.id} className="p-4 bg-gray-500 h-fit flex flex-col gap-2 ">
            <h2 className="text-xl">{task.title}</h2>
            <p>{task.description}</p>
            <span className="flex justify-between">
              <button onClick ={() => handleEdit(task.id)} className="px-2 py-2 bg-yellow-500 text-white rounded cursor-pointer active:scale-95">Edit</button>
              <button onClick={()=> {hadnleDelete(task.id)}} className="px-2 py-2 bg-red-500 text-white rounded cursor-pointer active:scale-95">Delete</button>
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
