import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav >
        <li>
          <NavLink activeClassName="selectedNavLink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selectedNavLink" to="/formik">
            Formik
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selectedNavLink" to="/">
            other
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
