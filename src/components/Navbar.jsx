import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/3491.jpg";

const Navbar = () => {
  return (
    <header className="px-16 p-6 fixed top-0 right-0 left-0 bg-white rounded-md mb-16 z-10">
      <nav className="flex">
        <Link to="/" className="mr-auto">
          <img src={logo} alt="logo" className="h-10 object-cover" />
        </Link>
        <ul className="flex space-x-5 text-base font-medium ">
          <Link to="/">
            <li className="">Home</li>
          </Link>
          <Link to="/schemes">
            <li className="">GovtSchemes</li>
          </Link>
          <Link to="/farmingtech">
            <li className="">FarmingTech</li>
          </Link>
          <Link to="/hybrid">
            <li className="">Hybrid</li>
          </Link>
          <Link to="/cropsknowledge">
            <li className="">Crops Info</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
