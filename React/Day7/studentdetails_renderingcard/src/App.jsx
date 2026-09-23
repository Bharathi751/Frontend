

const App = () => {

const studentdetails = [
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
]


  return (
    <>
    <div className="bg-amber-400 flex justify-between items-center flex-wrap gap-3 p-10 ">
      {studentdetails.map((e,i)=>(
        <div key={i} className="bg-black text-white p-3 w-100  h-50 rounded-2xl">
          <h2>{e.name}</h2>
          <p>{e.age}</p>
          <p>{e.course}</p>
          <button className=" bg-white text-black roun">view details</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default App