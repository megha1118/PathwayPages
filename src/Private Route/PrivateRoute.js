import React from 'react'
import { Route } from 'react-router-dom';
// import { NavLink } from "react-router-dom";
import { Link} from 'react-router-dom';

// import { Navigate } from "react-router-dom";

 const PrivateRoute = ({children, ...rest}) => {
    const isAuth= false;

  return (
    <Route {...rest} render={()=>isAuth?(children): (<Link to='/ForgotPassword'/>)}/>
  )
}
 export default PrivateRoute