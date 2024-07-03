import React, { useEffect } from "react";

import img1 from "../../Assets/about1.jpg";
import img2 from "../../Assets/about2.jpg";
import img3 from "../../Assets/about3.jpg";
import video from "../../Assets/video.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
          Why hiking?
        </h2>
        <div className="mainContent container grid">
          <div
            className="singleItem"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={img2} alt="" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div
            className="singleItem"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <img src={img3} alt="" />
            <h3>1000+ Hiking</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div
            className="singleItem"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src={img1} alt="" />
            <h3>2000+ Customer</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being.
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              className="cardText"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Wonderful house experience nin there!</h2>
              <p>
                The adventure subranking is based on an equally weighted avarage
                of scores from five country
              </p>
            </div>
            <div
              className="cardVideo"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <video src={video} type="video/mp4" autoPlay loop muted></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
