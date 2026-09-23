import { Link } from "react-router-dom"

const Help = () => {
  return (
    <>
    <section className="bg-green-800 p-10 flex justify-center items-center h-100">
        <div>
            Help Page
        </div>
        <div>
          <Link to="/services">Going to Service page</Link>
        </div>
    </section>
    </>
  )
}

export default Help