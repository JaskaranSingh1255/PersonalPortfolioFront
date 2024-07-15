import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import  myphoto from "../../assets/images1/myphoto.jpg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={myphoto}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am a dedicated software developer fueled by curiosity and a relentless drive for innovation. With a strong commitment to continuous learning and a collaborative spirit, I excel in tackling challenges head-on and delivering outstanding results. Let's join forces and create something extraordinary together.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;