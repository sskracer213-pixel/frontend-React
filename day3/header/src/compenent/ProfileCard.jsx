 import logo from "../assets/image/logo.jpg"
 import "../ProfileCard.css";
import profileImage from "../assets/hero.png";

const ProfileCard = () => {
  return (<>
    <div className="profile-card">

      


     <div>
      <img src={logo} alt="" />
     </div>

      <h2>Santhosh</h2>

      <p>Web Developer</p>

      <button className="profile-button">
        View Profile
      </button>

    </div>
  </>);
}

export default ProfileCard;