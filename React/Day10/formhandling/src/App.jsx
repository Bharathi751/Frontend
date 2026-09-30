import { useState } from "react"

const App = () => {

  const [saveDatas,setSaveDatas] = useState({username:"",usernumber:"",useremail:""})

const handleChange = (e)=>{



setSaveDatas({...saveDatas,[e.target.name]:e.target.value})


}

const handleClick = (e)=>{

  e.preventDefault()

  if (saveDatas.username === "" || saveDatas.usernumber === "" || saveDatas.useremail === "") {
    alert("fill the form")
    return
  }

const datas = JSON.parse(localStorage.getItem("mydatas")) || []

datas.push(saveDatas)

localStorage.setItem("mydatas",JSON.stringify(datas))

alert("Successfuly Done")

setSaveDatas({username:"",usernumber:"",useremail:""})



}


  return (
    <>
    <div>
      <form>
        <input type="text" name="username" value={saveDatas.username} onChange={handleChange}/>
        <input type="number" name="usernumber" value={saveDatas.usernumber} onChange={handleChange}/>
        <input type="email" name="useremail" value={saveDatas.useremail} onChange={handleChange}/>
        <button onClick={handleClick}>Register</button>
      </form>
    </div>
    </>
  )
}

export default App