import React, { useEffect } from "react";
import Aos from "aos";

import { MdOutlineKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

import img1 from "../../Assets/offer1.jpg";
import img2 from "../../Assets/offer2.jpg";
import img3 from "../../Assets/offer3.jpg";

import "aos/dist/aos.css";
import "./Offers.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    location: "Paris, France",
    price: "$4,000",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Angkor Wat",
    location: "Sydney, Australia",
    price: "$3,000",
  },
  {
    id: 3,
    imgSrc: img3,
    location: "London, England",
    price: "$4,000",
  },
];

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="secTitle">Spetial Offers</h2>
          <p>
            From historical cities to natural specteculars, come see the best of
            the world!
          </p>
        </div>
        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, price }) => {
            return (
              <div
                className="singleOffer"
                key={id}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">30% Off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                </div>
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdOutlineKingBed className="icon" />
                    <small>2 beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaBath className="icon" />
                    <small>1 bath</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaWifi className="icon" />
                    <small>Wi-Fi</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon" />
                    <small>Shuttle</small>
                  </div>
                </div>
                <div className="location flex">
                  <FaLocationDot className="icon" />
                  <span>
                    {destTitle}, {location}
                  </span>
                </div>
                <button className="btn flex">
                  View Details
                  <FaLongArrowAltRight className="icon" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
