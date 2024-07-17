import { Link } from "react-router-dom";
import logo from "../assets/MyCashLogo.png"


const TopNab = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg mb-1">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
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
