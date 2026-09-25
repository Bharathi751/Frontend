import { useState } from "react"


const App = () => {

const [userName,setUserName] = useState("")
const [userAge,setUserAge] = useState("")
const [showData,setShowData] = useState([])



const nameInput = (e)=>{ 

setUserName(e.target.value)
}
 const ageInput = (e)=>{
setUserAge(e.target.value)

 }

 const clickButton =()=>{


  const obj = {id:Date.now(),name:userName, age:userAge}

  setShowData(obj)
 }
  return (
    <>
    <div className="bg-amber-100 p-3">
  
   

    <input type="text"  onChange={nameInput} placeholder="enter the name"/>
    <input type="number" onChange={ageInput} placeholder="enter the age"/>
    <button onClick={clickButton}>Click to login</button>
     </div>





     <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>UserAge</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
     </div>
    </>
  )
}

export default App