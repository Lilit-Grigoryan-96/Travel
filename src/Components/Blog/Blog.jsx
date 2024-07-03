import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { FaLongArrowAltRight } from "react-icons/fa";

import img1 from "../../Assets/popular1.jpg";
import img2 from "../../Assets/popular2.jpg";
import img3 from "../../Assets/popular3.jpg";
import img4 from "../../Assets/popular4.jpg";

import "./Blog.css";

const Posts = [
  {
    id: 1,
    postImage: img1,
    title: "Eiffel Tower",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,",
  },
  {
    id: 2,
    postImage: img2,
    title: "Sydney Opera House",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,",
  },
  {
    id: 3,
    postImage: img3,
    title: "Beautiful Bora Bora Lets travel",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,",
  },
  {
    id: 4,
    postImage: img4,
    title: "Tower of London",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="secTitle">Our Best Blog</h2>
          <p>An insight to the incredible experiance in the world!</p>
        </div>
        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                className="singlePost grid"
                key={id}
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="imdDiv">
                  <img src={postImage} alt={title} />
                </div>
                <div className="postDetails">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href="#" className="flex">
                    Read more
                    <FaLongArrowAltRight className="icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
