import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  return (
    <>
      <div className="flex justify-between px-12 py-2 bg-gray-700 text-white">
        <h1 onClick={() => navigate('/')} className="text-2xl cursor-pointer">Todo</h1>
        <button onClick={() => navigate('/add')} className="px-3 py-3 cursor-pointer active:scale-95 bg-gray-800 text-white rounded">Add Task</button>
      </div>
    </>
  )
}

export default Navbar
