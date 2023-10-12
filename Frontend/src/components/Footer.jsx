import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Container className="bg-[#010851] text-white">
      
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <Link
            to={"/"}
            className=" text-2xl font-semibold flex items-center space-x-3 text-primary "
          >
            <Logo width="100px" /> <span className="text-white">ABC</span>
          </Link>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur adipisci hic maxime aperiam quam at dolorum sequi
            cupiditate!
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              className="bg-[#9A7AF159] py-2 px-4 rounded-md focus:outline-none "
            />

            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>

        {/* Footer navigations */}

        <div className=" md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start ">
          <div className=" space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className=" list-none space-y-3">
              <li>
                <Link to={"/"} className="block hover:text-gray-300">
                  How does it works
                </Link>
              </li>
              <li>
                <Link to={"/"} className="block hover:text-gray-300">
                  Where to ask question?
                </Link>
              </li>
              <li>
                <Link to={"/"} className="block hover:text-gray-300">
                  How to play?
                </Link>
              </li>
              <li>
                <Link to={"/"} className="block hover:text-gray-300">
                  what is needed for this?
                </Link>
              </li>
            </ul>
          </div>

          <div className=" space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className=" list-none space-y-3">
              <li>
                <Link to={"/"} className="block hover:text-gray-300">
                  Overview
                </Link>
              </li>
              <li>
                <Link to={"/"} className="block hover:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to={"/"} className="block hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/"} className="block hover:text-gray-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>


          <div className=" space-y-4 mt-5">
            <h4 className="text-xl">Contact</h4>
            <ul className=" list-none space-y-3">
              <li>
                <p className="hover:text-gray-300">
                  (+91) 85610314561
                </p>
              </li>
              <li>
                <p className="hover:text-gray-300">
                  123 ABC ABC
                </p>
              </li>
              <li>
                <p className="hover:text-gray-300">
                  bdiubsjkbaa, gydvs - ugyux
                </p>
              </li>
              <li>
                <p className="hover:text-gray-300">
                  0941381
                </p>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </Container>
  );
};

export default Footer;
