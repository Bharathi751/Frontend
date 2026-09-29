import { useState } from "react"

const App = () => {

const [age,setAge] = useState("")
const [display,setDisplay] = useState("")

const handleChange = (e)=>{

  setAge(e.target.value)

}

const handleSubmit = (e)=>{
  e.preventDefault()



age === "" ? setDisplay("Age is required"):setDisplay(`Entered Age: ${age}`) ,setAge("")

}

  return (
    <>
    <div>
<h1>Age Validation</h1>

<form onSubmit={handleSubmit}>
  <input type="number" placeholder="enter your age" onChange={handleChange}/>
  <button type="submit">Submit</button>
</form>

<h2>{display}</h2>

    </div>
    </>
  )
}

export default App