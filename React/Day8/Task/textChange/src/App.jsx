import { useState } from "react"

const App = () => {

const [text,setText] = useState("Helo React")

const textChange = ()=>{

  setText("Welcome to React")
}

  return (
    <>
    <div>
<h1>{text}</h1>
<button onClick={textChange}>Change Text</button>
    </div>
    </>
  )
}

export default App