/* 

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
 */










/* 
import { useState } from "react"


const App = ()=>{

  const [userName,setUserName] = useState("")

  const [showData,setShowData] = useState("")

  const handleChange = (e)=>{

    setUserName(e.target.value)
  }

  const handleClick = ()=>{

    const evenValues

    setShowData()
  }

return(<>

<div>

  
  <input type="text" onChange={handleChange} /> 

  <button onClick={handleClick}>Submit</button>

  <p>{showData%2===0?"Even":"Odd"}</p>
</div>

</>)

}

export default App

 */


import { useState } from "react";

const App = () => {

  const [username,setUserName] = useState("")
  const [userage,setUserAge] = useState("")
  const [showData,setShowData] = useState([])



const handleChange =(e)=>{

setUserName(e.target.value)


}

const handleAge =(e)=>{
setUserAge(e.target.value)

}

const handleClick = ()=>{

  const obj = {id:Date.now(), username:username,userage:userage}

  const copy =[...showData]
         
  copy.push(obj)

  setShowData(copy)

  setUserName("")
  setUserAge("")

  alert("Sucessfully save")

}

  return (
    <>
    <div>
      <input type="text"  onChange={handleChange} value={username} placeholder="enter the name"/>
      <input type="number"  onChange={handleAge} value={userage} placeholder="enter the number"/>
      <button onClick={handleClick}>Click</button>
      <p>{showData.username}</p>
      <p>{showData.userage}</p>

      <table border={"2"} cellPadding={"10"} cellSpacing={"9"} >
        <thead>
          <tr>
            <th>S.No</th>
            <th>UserName</th>
            <th>UserAge</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((e)=>(
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.username}</td>
              <td>{e.userage}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
    </>
  )
}

export default App