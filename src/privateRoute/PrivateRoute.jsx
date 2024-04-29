import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user , loading } = useContext(AuthContext);
  const location = useLocation()
  if(loading){
    return <div className="loading loading-spinner loading-lg mt-10"></div>
}

  if (!user) {
    return <Navigate to ="/login"  state={location?.pathname || '/'}/>
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
PrivateRoute.propTypes ={
  children:PropTypes.node
}
