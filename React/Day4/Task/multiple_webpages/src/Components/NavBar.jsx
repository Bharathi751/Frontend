import { NavLink } from "react-router-dom"


const NavBar = () => {


  return (  
    <>
    <nav className="">
        <div className="bg-black text-white p-2 flex justify-around items-center"> 
            <h2 className="mx-5 bg-white  p-2 text-center text-black w-30 rounded-2xl">Multiple Webpages</h2>


            <div className="flex gap-10 mx-5">
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