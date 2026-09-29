import { useState } from "react"


const App = () => {

const [name,setName] = useState("")

const handleChange = (e)=>{

setName(e.target.value)

}


  return (
    <>
    <div>
      <h1>Name Input</h1>

    <input type="text" placeholder="enter you name" value={name} onChange={handleChange}/>

    <h2>Entered Name:{name}</h2>

    </div>
    </>
  )
}

export default App