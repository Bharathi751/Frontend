import Employee from "./Employee"

const App = () => {

const empdetails = {name:"Bharathi",role:"Webdeveloper",salary:25000,city:"Chennai"}

  return (
<>
<div>
  <h1> Employee Details</h1>

  <Employee sendtoemp={empdetails}/>
</div>
</>  )
}

export default App