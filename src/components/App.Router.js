import React from "react";
import { NavLink } from 'react-router-dom'; 

const Router = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/weather">Weather</NavLink>
    </div>
  );
};

export default Router;