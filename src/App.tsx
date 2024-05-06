import { Routes,Route, } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import Contact from "./Pages/Contact/Index"
import Chart from "./Pages/Charts/Index"
import Home from "./Pages/Home/Index"

function App() {

  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ContactPage" element={<Contact/>}/>
        <Route path="/ChartsPage" element={<div><Chart/></div>}/>
      </Routes>
    </div>
  )
}

export default App
