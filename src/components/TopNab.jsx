import { Link } from "react-router-dom";
import logo from "../assets/MyCashLogo.png"


const TopNab = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg mb-1">
  <div className="navbar-start">
   
    <Link to={'/'}><img src={logo} alt="logo" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/login'} className="btn border-2 bg-transparent hover:bg-transparent hover:border-red-400 text-red-500 px-6 font-bold ">Log in</Link>
  </div>
</div>
  );
};

export default TopNab;
