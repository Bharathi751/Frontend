import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Courses from "./Pages/Courses"
import Gallery from "./Pages/Gallery"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Help from "./Pages/Help"
import NotFound from "./Pages/NotFound"


const App = () => {
  return (
    <>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/help" element={<Help/>}/>

      <Route path="*" element={<NotFound/>}/>
    </Routes>

    </>
  )
}

export default App