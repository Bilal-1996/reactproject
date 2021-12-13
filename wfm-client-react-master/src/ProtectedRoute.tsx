import React from "react";
import { Route, Redirect } from "react-router-dom";
import WFMHomeHOC from "./Redux/HOC/WFMHomeHOC";
import ManagerHomeHOC from "./Redux/HOC/ManagerHomeHOC";


const token= localStorage.getItem("token");
const usertype =  localStorage.getItem("usertype")

const ProtectedRoute = ({ children, ...rest }:any) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token? usertype==="manager"?(
          <ManagerHomeHOC/>
        ):(<WFMHomeHOC/>) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
