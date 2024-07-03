import React, { useState } from "react";
import { MdModeOfTravel } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import "./Navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("navBar");
  const [transparent, setTransparent] = useState("header");

  function handleShowNavbar() {
    setActiveNav("navBar active");
  }

  function handleHideNavbar() {
    setActiveNav("navBar");
  }

  function addBg() {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  }

  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="/" className="logo">
            <h1 className="flex">
              <MdModeOfTravel className="icon" />
              Dot
            </h1>
          </a>
        </div>
        <div className={activeNav}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#">
                Contacts
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#">
                Blog
              </a>
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn">Login</button>
              <button className="btn">Sign up</button>
            </div>
          </ul>
          <div className="closeNavbar">
            <IoCloseCircle className="icon" onClick={handleHideNavbar} />
          </div>
        </div>
        <div className="toggleNavbar">
          <TbGridDots onClick={handleShowNavbar} className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
