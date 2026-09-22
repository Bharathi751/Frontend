import LogoImgs from "../assets/vite.svg"

const Navbar = () => {
  return (<>
    <div className="bg-blue-400 text-white p-2 flex justify-between items-center ">
        <div className="">
          <Logo  />
        </div>
        <div className="flex gap-5">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Help</a>
        </div>
    </div>
  </>)
}

export default Navbar

 export const Logo =()=>{
return(<>
 
<img className="w-20 p-1" src={LogoImgs}  alt=""/>

</>)
}