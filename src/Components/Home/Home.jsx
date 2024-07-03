import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title" data-aos="fade-up">
            Plan Your Trip with Travel Dot
          </h1>
          <p className="subTitle" data-aos="fade-up" data-aos-duration="2500">
            Travel to your favourite city with respectful of invironment
          </p>
          <button className="btn" data-aos="fade-up" data-aos-duration="3000">
            Explore Now
          </button>
        </div>
        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>
          <div className="distDiv">
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder="11/Meters" />
          </div>
          <div className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder="$140-$500" />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
