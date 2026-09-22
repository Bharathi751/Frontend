import "./Profilecard.css"
import Pimg from "./assets/profile.png"
const ProfileCard = () => {
  return (
   <>
   <div className="p-card">
   <img className="p-image" src={Pimg} alt="Profile" />
   <h2 className="p-name">Bharathi</h2>
   <p className="p-role">Frontend Developer</p>
   <button className="p-btn">View Profile</button>
   </div>
   </>
  )
}

export default ProfileCard