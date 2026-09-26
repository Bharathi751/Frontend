import { useState } from "react"

const App = () => {

const [countNumber,setCountNumber] = useState(0)

const increaseClick  = ()=>(
setCountNumber(countNumber+1)
)

const decreaseClick  = ()=>(
setCountNumber(countNumber-1)
)

const resetClick  = ()=>(
setCountNumber(0)
)


  return (
    <>
    <div className="">
<h1>{countNumber}</h1>
<button onClick={increaseClick}>++</button>
<button onClick={decreaseClick}>--</button>
<button onClick={resetClick}>Reset</button>
    </div>
    </>
  )
}

export default App