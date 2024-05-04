import logo from "../assets/logo.png";
import userIcon from "../assets/userIcon.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error")
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo} alt="logo" />
      
      
      {user && <div className="flex p-2">
        <img className="w-20 h-20" src={userIcon} alt="userIcon" />

        <button onClick={handleSignOut} className="bg-yellow-500">
          (Sign Out)
        </button>
      </div>}

    </div>
  );
};
export default Header;
