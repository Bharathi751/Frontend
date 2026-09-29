import { useState } from "react"

const App = () => {

const [search,setSearch] = useState("")


const handleChange = (e)=>{
 setSearch(e.target.value)
}



  return (
    <>
    <div>

      <h1>Search Input </h1>

      <input type="text" placeholder="Serach..." onChange={handleChange} value={search} />

      <h2> You are  Searching for : {search}</h2>

    </div>
    </>
  )
}

export default App