import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../components/SocialLogin";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [logInError, setLogInError] = useState("");
  const { singInUser } = useContext(AuthContext);

   //navigation
  
   const navigate = useNavigate()
   const location = useLocation()
 

  const handelLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    e.target.reset()
    const email = form.get("email");
    const password = form.get("password");
    console.log(form);
    setLogInError("");
    setSuccess("");
    singInUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        if(user){
          navigate(location?.state || '/' )
        }
        setSuccess( 'LogIn successfully',toast("LogIn successfully"),user);
        e.target.reset()
      })
      .catch((error) => {
        console.log(error);
        setLogInError("Incorrect email password ", toast.error("Incorrect email password"), error.message);
      });
  };
    return (
        <div className="border-4 w-full md:w-3/4 lg:w-1/2 mx-auto my-20 rounded-xl bg-stone-300 shadow-2xl shadow-blue-200 ">
        {/* <Helmet>
          <title>
            Login
          </title>
        </Helmet> */}
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mt-8 underline divider px-8">
          Please LogIn
        </h1>
        <form onSubmit={handelLogin} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium">
                {" "}
                Your password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered relative"
              required
            />
           
          </div>
          <span
              className="absolute top-[54%] right-[18%] md:right-[23%] md:top-[54%] lg:top-[44%] lg:right-[37%]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          <div className="form-control mt-6">
            <button className="btn bg-blue-600 text-slate-200 font-medium text-xl">
              Log In
            </button>
          </div>
         
        </form>
       <div className="mb-8 p-8">
       <SocialLogin/>
       </div>
  
        {logInError && (
          <p className="text-red-500 text-center mb-6 font-medium text-xl">
            {logInError}
          </p>
        )}
        {success && (
          <p className="text-green-500 text-center mb-6 font-medium text-xl">
            {success}
          </p>
        )}
        <p className="text-center mb-6 text-lg font-medium">
          Do not have an account please?{" "}
          <Link
            to="/register"
            className="text-xl font-bold text-blue-600 btn-link"
          >
            Register
          </Link>
        </p>
        <ToastContainer />
      </div>
    );
};

export default Login;