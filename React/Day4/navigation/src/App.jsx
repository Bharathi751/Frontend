import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Help from "./Pages/Help"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import ServicesHelp from "./Pages/ServicesHelp"

const App = () => {
  return (
    <>
    <NavBar/>

<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/help" element={<Help/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/sh" element={<ServicesHelp/>} />
</Routes>

    </>
  )
}

export default App