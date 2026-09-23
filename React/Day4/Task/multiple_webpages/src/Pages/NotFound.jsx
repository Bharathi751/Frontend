import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <>
    <section>
        <h1>404</h1>
        <p>Page Not Found</p>
    </section>
    <Link to="/">Go to Home</Link>
    </>
  )
}

export default NotFound