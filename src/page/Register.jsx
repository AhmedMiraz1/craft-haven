import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);

  //navigation

  const navigate = useNavigate();
 
  const handelRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    e.target.reset()
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
  console.log();


    if (password.length < 6) {
      setRegisterError(
        "password should be at least 6 characters",
        toast.error("password should be at least 6 characters")
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upperCase character",
        toast.error(
          "Your password should have at least one upperCase character"
        )
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one lowerCase character",
        toast.error(
          "Your password should have at least one lowerCase character"
        )
      );
      return;
    }
    setSuccess("");
    setRegisterError("");

    

    createUser(email, password)
      .then((result) => {

        //update profile
         
        updateUserProfile(name, photo)
        .then(() => {
          navigate("/");
        });

        const user = result.user;
        console.log(user);
        setSuccess(
          "User created successfully",
          toast("User created successfully"),
          user
        );
        e.target.reset()
      })
      .catch((error) => {
        setRegisterError(
          "You have already registered",
          toast.error("You have already registered"),
          error.message
        );
      });
  };
    return (
        <div className="border-4 w-full md:w-3/4 lg:w-1/2 mx-auto my-20 rounded-xl bg-stone-300 shadow-2xl shadow-blue-200 ">
        {/* <Helmet>
         <title>
           Register
         </title>
       </Helmet> */}
       <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mt-8 underline divider px-8">
         Please Register{" "}
       </h1>
       <form onSubmit={handelRegister} className="card-body ">
         <div className="form-control">
           <label className="label">
             <span className="label-text text-xl font-medium">Your name</span>
           </label>
           <input
             type="text"
             name="name"
             placeholder="Name"
             className="input input-bordered"
             required
           />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text text-xl font-medium">Photo URL</span>
           </label>
           <input
             type="text"
             name="photo"
             placeholder="Photo URL"
             className="input input-bordered"
             required
           />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text text-xl font-medium"> Your email</span>
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
             className="absolute top-[80%] right-[20%] md:right-[29%] md:top-[81%] lg:top-[65%] lg:right-[37%]"
             onClick={() => setShowPassword(!showPassword)}
           >
             {showPassword ? <FaEyeSlash /> : <FaEye />}
           </span>
         <div className="form-control mt-6">
           <button className="btn bg-blue-600 text-slate-200 font-medium text-xl">
             Register
           </button>
         </div>
       </form>
       {registerError && (
         <p className="text-red-500 text-center mb-6 font-medium text-xl">
           {registerError}
         </p>
       )}
       {success && (
         <p className="text-green-500 text-center mb-6 font-medium text-xl">
           {success}
         </p>
       )}
       <p className="text-center mb-6 text-lg font-medium">
         Already you have an account please?{" "}
         <Link to="/login" className="text-xl font-bold text-blue-600 btn-link">
           Login
         </Link>
       </p>
       <ToastContainer />
     </div>
    );
};

export default Register;