import { useState } from "react"


const App = ()=>{

const [employee,setEmployee] = useState({employeeName:"",employeeId:"",department:"",role:"",salary:""})

const [submitEmployee,setSubmitEmployee] = useState(null)

const handleChange = (e)=>{

setEmployee({...employee,[e.target.name]:e.target.value})

}

const handleSubmit = (e)=>{

e. preventDefault()

setSubmitEmployee(employee)

setEmployee({employeeName:"",employeeId:"",department:"",role:"",salary:""})

}

return(<>
<div>
<h1>Employee Details Form</h1>

<form onSubmit={handleSubmit}>
  <input type="text" onChange={handleChange} placeholder="Enter Employee Name" name="employeeName" value={employee.employeeName}/><br /><br />
  <input type="text" onChange={handleChange} placeholder="Enter Employee ID" name="employeeId" value={employee.employeeId}/><br /><br />
  <input type="text" onChange={handleChange} placeholder="Enter Department " name="department" value={employee.department}/><br /><br />
  <input type="text" onChange={handleChange} placeholder="Enter Role" name="role" value={employee.role}/><br /><br />
  <input type="number" onChange={handleChange} placeholder="Enter Salary " name="salary" value={employee.salary}/><br /><br />
  <button type="submit"> Submit</button>
</form>

{submitEmployee && (

<div>

  <h2>Employee Details</h2>

  <p>Name:{submitEmployee.employeeName}</p>
  <p>Id:{submitEmployee.employeeId}</p>
  <p>Department:{submitEmployee.department}</p>
  <p>Role:{submitEmployee.role}</p>
  <p>Salary:{submitEmployee.salary}</p>

</div>

)}

</div>
</>)

}
export default App