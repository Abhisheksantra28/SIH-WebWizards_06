import Container from "../container/Container";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: "Overview",
      Path: "/overview",
    },
    {
      name: "Features",
      Path: "/features",
    },
    {
      name: "About",
      Path: "/about",
    },
    {
      name: "Pricing",
      Path: "/pricing",
    },
  ];

  return (
    <>
      <header className=" bg-white md:px-14 p-4 border-b max-w-screen-2xl mx-auto text-primary">
        
          <nav className="text-lg flex items-center container font-medium justify-between mx-auto  ">
            <div className="flex space-x-14 items-center">
              <div className="flex mr-4">
                <Link
                  to={"/"}
                  className=" text-2xl font-semibold flex items-center space-x-3 text-primary "
                >
                  <Logo width="100px" /> <span>ABC</span>
                </Link>
              </div>

              <ul className="md:flex space-x-12 hidden ">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link className="hover:text-gray-300" to={item.Path}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="  space-x-8 hidden md:flex items-center ">
              <Link
                to={"/"}
                className="lg:flex items-center gap-2 hidden  hover:text-secondary"
              >
                <GrLanguage />
                <span>Language</span>
              </Link>
              <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-500">
                Sign up
              </button>
            </div>

            {/* menu btn only display on mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none  focus:text-gray-300"
              >
                {isMenuOpen ? (
                  <FaXmark className="w-6 h-6 text-primary" />
                ) : (
                  <FaBars className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </nav>
       
      </header>

      {/* Navitems for mobile devices */}

      <div
        className={` space-y-4 text-lg list-none px-4 pt-5 pb-5 bg-secondary ${
          isMenuOpen ? "block " : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <Link className="hover:text-gray-300" to={item.Path}>
              {item.name}
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Header;
