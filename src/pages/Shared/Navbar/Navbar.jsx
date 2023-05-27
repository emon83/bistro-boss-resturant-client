import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link className="uppercase" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="uppercase" to="/">
          CONTACT us
        </Link>
      </li>
      <li>
        <Link className="uppercase" to="/">
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link className="uppercase" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="uppercase" to="/order">
          Our Shop
        </Link>
      </li>
      <li>
        <Link to="/">
          <button className="btn btn-ghost gap-2">
            <FaShoppingCart/>
            <div className="badge badge-sm badge-secondary">+0</div>
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-2xl">
        <div className="navbar-start">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navOptions}
            </ul>
          </div>
          <a className="normal-case text-xl lg:ml-10">
            <h2 className="primary-font font-extrabold">
              BISTRO BOSS <br />
              <span className="text-base">Restaurant</span>
            </h2>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link onClick={handleLogOut} className="btn btn-sm">
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
