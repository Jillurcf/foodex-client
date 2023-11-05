import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/FHLogo.png'
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
  const { user, loggedOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-blue-600 text-white font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-blue-300 font-bold"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
         About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
         Contact Us
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    loggedOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className=" pt-8 w-full fixed z-40">
      <div className="navbar lg:h-24 opacity-80">
        <div className="navbar-start md:pl-60">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="w-24">
            <img src={logo} alt="Logo Image" />
          </a>
          <h1 className="px-2 text-3xl text-blue-600 font-extrabold">foodEX</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end md:pr-60">
        
          {user?.email ? (
            <div className="dropdown z-30 dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm btn-ghost"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">
              <button className="btn bg-blue-600 border-none rounded-7xl text-white">Login</button>
            </Link>
          )}
          
        </div>
        {/* <div className="navbar-end md:mx-12">
         <Link to='/signin'> <button className="btn btn-secondary">Log In</button></Link>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
