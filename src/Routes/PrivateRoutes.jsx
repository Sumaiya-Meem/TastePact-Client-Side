/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading/Loading";

const PrivateRoute = ({children}) => {
    const {user,handleReload} =useContext(AuthContext);
    const location =useLocation();
    // console.log(location)
    if(handleReload){
        return <Loading></Loading>;
    }
    if(user){
          return children;
    }
    
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;