
const App = () => {

const employee = {name:"Bharthi",role:"Webdeveloper",salary:25000,location:"Chennai"}

  return (
    <>
    <div>
<h1>Employee Details</h1>
<p> Name:{employee.name}</p>
<p> Role:{employee.role}</p>
<p> Salary:{employee.salary}</p>
<p> Location:{employee.location}</p>
    </div>
    </>
  )
}

export default App