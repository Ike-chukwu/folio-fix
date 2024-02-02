import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import pic from "../../images/profile.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section-parent">
      <section className="hero-section">
        <div className="main-side">
          <p className="title">Welcome.</p>
          <p className="details">
            My name is Ikechukwu Ugboko. I am a front-end developer and my
            primary focus is on creating dynamic and interactive user
            interfaces.In addition, I have a keen eye for design and enjoy
            creating visually appealing and user friendly experiences.I am
            excited about the prospect of working with a team that shares my
            passion for excellence in web development.
          </p>

          <Link
            style={{ textDecoration: "none", color: "unset" }}
            to="/projects"
          >
            <button className="click-btn">
              <span className="prompt"> Check projects</span>
              <i className="fas fa-long-arrow-right"></i>
            </button>
          </Link>
        </div>
        {/* <div className="right-edge">
          <img src={pic} alt="" />
        </div> */}
      </section>
    </div>
  );
};

export default HeroSection;
