import { Link, NavLink } from "react-router-dom";
import 'animate.css';


const Navbar = () => {
    return (
        <div className="navbar bg-blue-100 px-8 md:px-12 lg:px-16 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to='/' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold ': 'font-bold' }>
            Home
          </NavLink>
          <NavLink to='/allCraft' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold ': 'font-bold' }>
          All craft
          </NavLink>
          <NavLink to='/addCraft' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold ': 'font-bold' }>
          Add craft
          </NavLink>
          <NavLink to='/myList' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold ': 'font-bold' }>
          My list
          </NavLink>
          
          {/* {
          user &&  <NavLink to='/blog' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold text-xl ': 'font-bold ' }>
          Blog
          </NavLink>
         } */}
         
          
            </ul>
          </div>
          <Link to= '/' className="btn btn-ghost text-lg md:text-xl lg:text-2xl flex gap-0 text-primary font-medium md:font-semibold lg:font-extrabold  animate__animated animate__zoomIn animate__delay-2000">CraftHaven <span className="text-pink-500">Creations</span></Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink to='/' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold  text-xl ': 'font-bold text-xl' }>
            Home
          </NavLink>

          <NavLink to='/allCraft' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold text-xl ': 'font-bold text-xl' }>
          All craft 
          </NavLink>
          <NavLink to='/addCraft' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold text-xl ': 'font-bold text-xl' }>
          Add craft 
          </NavLink>
          <NavLink to='/myList' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold text-xl ': 'font-bold text-xl' }>
          My list 
          </NavLink>
         {/* {
          user &&  <NavLink to='/blog' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold text-xl ': 'font-bold text-xl' }>
          Blog
          </NavLink>
         } */}
           
          </ul>
        </div>
        
        <div className="navbar-end">
          {/* {
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
                <li className="my-4  border px-6 py-2  rounded-xl flex flex-row">
                  <Link to="/updateProfile" className="btn btn-sm btn-ghost  "><span><MdOutlineUpdate/></span>
                    Update profile

                  </Link>
                </li>
                <li  className="border px-6 py-2 rounded-xl">
                 <button onClick={logOut}
                  className="btn btn-sm btn-ghost "> <span><CiLogout /></span>Logout </button>
                </li>

              </ul>

            </div>
            :
            <Link to= '/login' className="btn bg-blue-100 border-none btn-outline text-lg md:text-xl lg:text-2xl md:font-bold">LogIn</Link>
          } */}
          <Link to= '/login' className="btn bg-blue-100 border-none btn-outline text-lg md:text-xl lg:text-2xl md:font-bold">LogIn</Link>
        
          
        </div>
      </div>
    );
};

export default Navbar;