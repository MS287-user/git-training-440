import React from "react";

const Header = () => {
  return (
    <>
        <div className="p-4 flex justify-between items-center bg-blue-900 text-white">
          <div id="nav-logo">
            <i className="ri-behance-line text-2xl"></i>
          </div>

          <div id="nav-menu">
            <ul className="md:flex hidden gap-5">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div id="nav-toggle" className="md:invisible visible">
            <i className="ri-menu-2-line text-2xl text-white"></i>
          </div>
        </div>
    </>
  )
};

export default Header;
