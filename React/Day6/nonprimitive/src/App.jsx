
/* 
const App = () => {
  const isActive = null
  return (
    <>
    <div className={isActive?"bg-amber-400 p-3":"bg-blue-400 p-3"}>
      {isActive?<p className="bg-green-500">This is true</p>:<p className="bg-red-500">This is false</p>}
      <div>
      {isActive && <p className="bg-pink-300">This is logical operator</p>}
      </div>
      <div>
        {isActive ?? <p className="bg-cyan-900">This is null is colichon </p>}
      </div>
    </div>
    <button className={isActive?"bg-green-400 text-center p-1 w-50":"bg-red-400 text-center p-1 w-50"}>{isActive?"Hide":"Show"}</button>
    </>
  )
}

export default App */




const App = () => {

/* const arr = [1,2,3,4,5,6,7,8,9,0]

const findnew =arr.filter((e)=>e/2==0)


const newarr = arr.join("--") */

const obj = {name:"raect",age:"20",year:"2026"}


const arrobj = [

  {name:"raect",age:"20",year:"2026"},
  {name:"js",age:"21",year:"2026"},
  {name:"fs",age:"30",year:"444"},
  {name:"css",age:"20",year:"2026"}

]


  return (
  <>
  <div className="bg-blue-500 text-white flex p-3 h-100 justify-center items-center">

  {/* <p>{findnew}</p> 

 {
findnew.map((e,i)=>(
<p className="bg-amber-300 text-black text-center w-50 p-2 rounded-2xl" >{e}</p>

))
}   */}


<p>{arrobj[2].name}</p>

  </div>
  </>
  )
}

export default App