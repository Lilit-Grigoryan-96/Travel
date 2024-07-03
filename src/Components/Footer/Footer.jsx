import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { MdModeOfTravel } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv" data-aos="fade-up" data-aos-duration="1000">
          <div className="footerLogo">
            <a href="/" className="logo flex">
              <h1 className="flex">
                <MdModeOfTravel className="icon" />
                Dot
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div
          className="footerLinks"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span className="linkTitle">Helpful liks</span>
          <ul>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div
          className="footerLinks"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="linkTitle">Information</span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div
          className="footerLinks"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span className="linkTitle">Contact us</span>
          <span className="phone">+347 333 333</span>
          <span className="email">test@test.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
