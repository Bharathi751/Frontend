import { useState } from "react"


const App = () => {

const [student,setStudent] = useState({name:"",email:"",age:"",course:"",city:""})

const handleChange = (e)=>{

  setStudent({...student,[e.target.name]: e.target.value})

}

const handleSubmit = (e)=>{
  
  e.preventDefault()
console.log(student);

}


  return (
    <>
    <div>
      <h1>Student Registration Form</h1>

<form onSubmit={handleSubmit}> 

<input type="text" placeholder="enter the name" name="name" value={student.name} onChange={handleChange}/>
<input type="email" placeholder="enter the email" name="email" value={student.email} onChange={handleChange}/>
<input type="number" placeholder="enter the age" name="age" value={student.age} onChange={handleChange}/>
<input type="text" placeholder="enter the course" name="course" value={student.course} onChange={handleChange}/>
<input type="text" placeholder="enter the city" name="city" value={student.city} onChange={handleChange}/>
<br></br>
<button type="submit"> Register</button>

</form>

    </div>
    </>
  )
}

export default App