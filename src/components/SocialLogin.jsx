import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const SocialLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext);

    //navigation
  
    const navigate = useNavigate()
    const location = useLocation()
    const form = location?.state || '/'
  
    const handelSocialLogin = socialProvider =>{
      socialProvider()
      .then(result => {
          const user =result.user
          if(user){
              navigate(form)
          }
      })
    }
    return (
        <div>
      <h1 className="text-center divider text-2xl font-bold text-green-600">Continue with </h1>
      <div className="flex flex-col">
        <button
          onClick={() => handelSocialLogin(googleLogin)}
          className=" btn btn-outline my-6 text-orange-700 text-xl font-medium"
        >
          {" "}
          <span>
            <FaGoogle />
          </span>{" "}
          Sing in with google
        </button>
        <button
          onClick={() => handelSocialLogin(githubLogin)}
          className=" btn btn-outline text-xl font-medium text-blue-700"
        >
          {" "}
          <span>
            <FaGithub />
          </span>
          Sing in with Github
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;