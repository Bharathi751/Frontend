

const App = () => {

const studentdetails = [
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:40,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:29,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:27,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
  {name:"Bharathi",age:30,course:"mern"},
  {name:"Bharathi",age:20,course:"mern"},
]

const copydata = [...studentdetails]


 const datacopy = copydata.filter((e)=>e.age>20)

 console.log(datacopy);
 



  return (
    <>
    <div className="bg-amber-400 flex justify-between items-center flex-wrap gap-3 p-10 ">
      {datacopy.map((e,i)=>(
        <div key={i} className="bg-black text-white p-3 w-70  h-35 rounded-3xl">
          <h2>{e.name}</h2>
          <p>{e.age}</p>
          <p>{e.course}</p>
          <button className=" bg-white text-black rounded-2xl p-1 w-30 text-center">view details</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default App