import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
        <div className="p-4 flex justify-between items-center bg-blue-900 text-white">
          <div id="nav-logo">
            <i className="ri-behance-line text-2xl"></i>
          </div>

          <div id="nav-menu">
            <ul className="md:flex hidden gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div id="nav-toggle" className="md:invisible visible" onClick={handleToggle}>
            <i className="ri-menu-2-line text-2xl text-white"></i>
          </div>
        </div>

        <div className={`${toggle ? 'block' : 'hidden'} bg-blue-900 text-white text-center md:hidden leading-10`}>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/about'>About</Link></p>
          <p><Link to='/services'>Services</Link></p>
          <p><Link to='/contact'>Contact</Link></p>
        </div>
    </>
  )
};

export default Header;
