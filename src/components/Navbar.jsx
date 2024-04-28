import { Link, NavLink } from "react-router-dom";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { VscDiffRenamed } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localThem = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localThem);
  }, [theme]);
  const handelToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="navbar bg-blue-100 px-8 md:px-12 lg:px-16 shadow-lg ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold " : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/allCraft"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold " : "font-bold"
              }
            >
              All craft
            </NavLink>
            <NavLink
              to="/addCraft"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold " : "font-bold"
              }
            >
              Add craft
            </NavLink>
            <NavLink
              to="/myList"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold " : "font-bold"
              }
            >
              My list
            </NavLink>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-lg md:text-xl lg:text-2xl flex gap-0 text-primary font-medium md:font-semibold lg:font-extrabold  animate__animated animate__zoomIn animate__delay-2000"
        >
          Craft<span className="text-pink-500">Haven</span>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-bold  text-xl "
                : "font-bold text-xl"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/allCraft"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-bold text-xl "
                : "font-bold text-xl"
            }
          >
            All craft
          </NavLink>
          <NavLink
            to="/addCraft"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-bold text-xl "
                : "font-bold text-xl"
            }
          >
            Add craft
          </NavLink>
          <NavLink
            to="/myList"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-bold text-xl "
                : "font-bold text-xl"
            }
          >
            My list
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        {/* {user?.email ? (
          <button
            onClick={logOut}
            className="btn bg-blue-100 text-green-700 border-none btn-outline text-sm md:text-xl lg:text-2xl md:font-bold"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-blue-100 border-none btn-outline text-lg md:text-xl lg:text-2xl md:font-bold text-red-600"
          >
            
          </Link>
        )}

        {user && (
          <div>
            <img
              className="rounded-full btn-circle avatar btn btn-ghost w-12 ml-4  "
              src={
                user?.photoURL ||
                "https://i.ibb.co/YfrC5vT/user-removebg-preview.png"
              }
              alt=""
            />
           
          </div>
        )} */}
        {
            user? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || "https://i.ibb.co/YfrC5vT/user-removebg-preview.png"} alt="Mehedi" />
                 

                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[3]  shadow-base-100 bg-slate-300 rounded-box w-52 border ">
                <li  className="border px-6 py-2  rounded-xl flex flex-row ">
                 <button className="btn btn-sm btn-ghost "> <span><VscDiffRenamed /></span>{user?.displayName || "User Not found"} </button>
                </li>
               
                <li  className="border px-6 py-2 rounded-xl">
                 <button onClick={logOut}
                  className="btn btn-sm btn-ghost "> <span><CiLogout /></span>Logout </button>
                </li>

              </ul>

            </div>
            :
           <div className="flex gap-0">
             <Link to= '/login' className="btn bg-blue-100 border-none btn-outline text-sm md:text-xl lg:text-2xl md:font-bold">LogIn</Link>
             <Link to= '/register' className="btn bg-blue-100 border-none btn-outline text-sm md:text-xl lg:text-2xl md:font-bold">Register</Link>
            
           </div>
          }

        <label className="cursor-pointer grid place-items-center ml-1 md:ml-4">
          <input
            onChange={handelToggle}
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
