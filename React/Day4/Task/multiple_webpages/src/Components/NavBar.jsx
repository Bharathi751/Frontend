import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <nav>
        <div> 
            <h2>Multiple Webpages</h2>


            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/help">Help</NavLink>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar