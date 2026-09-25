
const App = () => {

const courses = ["FullStack","UI&UX","DigitalMarketing","DataScience","GenAi"]

  return (
    <>
    <div className="bg-blue-700 p-10 h-100">
      <h1 className="text-center text-white mt-20 font-bold text-3xl">Available Courses</h1>
      <div className="flex-wrap flex justify-center gap-6 mt-20">
        {courses.map((e,i)=>(
        <p key={i} className="bg-white p-4 w-60 rounded-2xl">
          <h3 className="text-center font-bold">
            {e}
          </h3>
          </p>
      ))}
      </div>
      
    </div>
    </>
  )
}

export default App