const App = () => {

const students = [
  {id:1,name:"Bharathi",age:21,course:"Java"},
  {id:2,name:"Akash",age:20,course:"Html"},
  {id:3,name:"Vicky",age:21,course:"Python"},
  {id:4,name:"Tamil",age:22,course:"JavaScript"}
]


  return (
    <>
    <div>
<h1>Student Details</h1>

<div>
{students.map((e,i)=>(
  <div key={e.id}>
    <h3>{e.name}</h3>
    <p>{e.age}</p>
    <p>{e.course}</p>
  </div>
))}
</div>
    </div>
    </>
  )
}

export default App