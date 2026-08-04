import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddTask from "./pages/AddTask"
import Home from "./pages/Home"
import Greeting from "./pages/Greeting"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greet" element={<Greeting />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
