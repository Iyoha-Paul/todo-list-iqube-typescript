import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/create" className="link">
        New Task
      </NavLink>
    </div>
  );
};

export default Navbar;
