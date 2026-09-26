
const App = () => {

const employee = [
  {id:1,name:"Bharathi",department:"Development",salary:30000},
  {id:2,name:"Tamil",department:"Testing",salary:20000},
  {id:3,name:"Vicky",department:"Backend",salary:45000},
  {id:4,name:"Akash",department:"IT",salary:30000}
]

  return (
    <>
    <div className=" bg-gray-100 p-8">
<h1 className="mb-8 text-center text-3xl font-bold">Employee Details</h1>

<div className=" ">
  <table className="w-full mx-auto  bg-white shadow-lg rounded-xl text-center">
    <thead>
      <tr className="bg-blue-500">
        <th className="p-4">ID</th>
        <th className="p-4">NAME</th>
        <th className="p-4">DEPARTMENT</th>
        <th className="p-4">SALARY</th>
      </tr>
    </thead>
    <tbody>
      {employee.map((e,i)=>(
        <tr key={e.id} className="border-b text-center">
          <td className="p-4">{e.id}</td>
          <td className="p-4">{e.name}</td>
          <td className="p-4">{e.department}</td>
          <td className="p-4">{e.salary}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>

<div>
<div className="bg-cyan-800 text-white p-7 ">
<h1 className="text-center font-bold text-3xl mb-7 shadow-lg p-2 rounded-2xl">Employee Details</h1>
 
 <div className=" text-black flex  flex-wrap justify-around">
  {employee.map((e,i)=>(
    <div key={e.id} className=" bg-white text-black text-center p-5 shadow-lg rounded-2xl  gap-7">
<h3 className="mb-4 text-2xl font-bold shadow-lg p-2 rounded-2xl">{e.name}</h3>
<h3 className="mb-2 font-semibold">{e.department}</h3>
<h3 className="font-semibold">{e.salary}</h3>
    </div>
  ))}
 </div>
</div>
</div>

    </>
  )
}

export default App




{/* <h1>Employee Details</h1>
 
 <div>
  {employee.map((e,i)=>(
    <div key={e.id}>
<h3>{e.name}</h3>
<h3>{e.department}</h3>
<h3>{e.salary}</h3>
    </div>
  ))}
 </div> */}
 