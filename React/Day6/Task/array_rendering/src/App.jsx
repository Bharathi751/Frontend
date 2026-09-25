/* 
const App = () => {

const courses = ["React","SQL","CSS","Html","JS"]

  return (
  <>
  <div>
    <h2>My Courses</h2>

    {courses.map((e,i)=>(
      <p key={i+1}>{e}</p>

    ))}
  </div>
  </>
  )
}

export default App */

const App = () => {

  const courses = ["React","SQL","HTML","JS","CSS"]

  return(
    <>
    <div>
<h1>My Courses</h1>

{courses.map((e,i)=>(
  <p key={i}>{e}</p>
))}


    </div>
    </>
  )


}

export default App