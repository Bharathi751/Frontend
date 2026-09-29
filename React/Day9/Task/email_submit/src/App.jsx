import { useState } from "react"


const App = () => {

const [email,setEmail] = useState("")
const [emailshow,setEmailShow] = useState("")

const handleChange = (e)=>{

  setEmail(e.target.value)
  
}

const handleSumbit = (e)=>{

e.preventDefault()
setEmailShow(email)

}


  return (
   <>
   <div>
    <h1>Email Submit</h1>
    <form onSubmit={handleSumbit}>
    <input type="email" placeholder="enter your email" value={email} onChange={handleChange}/> 
    <button type="submit">Submit</button>
   </form>

   <h2>Entered Email: {emailshow}</h2>
   </div>
   </>
  )
}

export default App