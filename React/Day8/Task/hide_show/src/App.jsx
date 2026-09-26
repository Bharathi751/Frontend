import { useState } from "react"

const App = () => {

const [hideShow,setHideShow] = useState(true)


const btnhideShow = ()=>{
  setHideShow(!hideShow)
}

  return (
    <>
    <div className="p-10">
      { hideShow && <h1 className="text-3xl font-bold mb-5 bg-blue-700 text-center text-white p-4">Hello React</h1>}


<button onClick={btnhideShow} className=" text-white">{hideShow ? <p className="bg-red-600 p-2  w-50 rounded-2xl">Hide</p> : <p className="bg-green-400 p-2 rounded-2xl w-50">Show</p>}</button>

    </div>
    </>
  )
}

export default App