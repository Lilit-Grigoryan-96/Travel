import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { LuDot } from "react-icons/lu";

import img1 from "../../Assets/popular1.jpg";
import img2 from "../../Assets/popular2.jpg";
import img3 from "../../Assets/popular3.jpg";
import img4 from "../../Assets/popular4.jpg";

import "./Popular.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Eiffel Tower",
    location: "Paris, France",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Sydney Opera House",
    location: "Sydney, Australia",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Bora Bora",
    location: "France",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Tower of London",
    location: "London, England",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            className="textDiv"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specteculars, come see the best
              of the world!
            </p>
          </div>
          <div
            className="iconsDiv flex"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <HiOutlineArrowSmLeft className="icon leftIcon" />
            <HiOutlineArrowSmRight className="icon" />
          </div>
        </div>
        <div className="mainContent grid" data-aos="fade-up">
          {Data.map(({ id, imgSrc, destTitle, location }) => {
            return (
              <div className="singleDestination" key={id}>
                <div className="destImage">
                  <img src={imgSrc} alt="card" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <HiOutlineArrowSmRight className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">{`0${id}`}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="dot flex">
                      <LuDot className="icon" /> Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
