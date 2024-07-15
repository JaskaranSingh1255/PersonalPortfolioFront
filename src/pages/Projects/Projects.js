import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import  bookStore from "../../assets/images1/bookStore.png";
import youtubeClone from  "../../assets/images1/youtubeClone.png"
import  Quiz from  "../../assets/images1/QuizApp.png";
import Food from "../../assets/images1/Food.png"
import WeatherApp from "../../assets/images1/weatherApp.png"
import { axios } from 'axios';
import SimonGam from "../../assets/images1/SimonGame.png"
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        Discover a collection of diverse web applications that demonstrate my skills in creating user-friendly, functional, and engaging digital solutions. These projects showcase my expertise in various aspects of web development, from frontend design to backend integration.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4 mb-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern stack</span>
                  <img
                    src={bookStore}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      BookNest
                    </h5>
                  </div>
                  <p className="project-description">
        A comprehensive e-commerce bookstore application developed with the MERN stack, providing users with a seamless shopping experience.
      </p>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack </span>
                  <img
                    src={youtubeClone}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React </span>                  
                  <span className="card-detail-badge">Tailwind</span>
                  <span className="card-detail-badge">Google Cloud</span>
                  <span className="card-detail-badge">Axios</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">StreamNest</h5>
                  </div>
                  <p className="project-description">
                  Created a fully functional YouTube clone by utilising YouTube Data API to fetch video data, including search results,
                  video details, and recommended videos.
      </p>
                  <a
                    className="ad-btn"
                    href="https://youtube12-krwo.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={Food}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">FlavorFly</h5>
                  </div>
                  <p className="project-description">
                  Designed and developed a user-friendly food delivery application utilizing HTML, CSS, and JavaScript for seamless
                  browsing and ordering experience.
      </p>
                  <a className="ad-btn" href="https://jaskaransingh1255.github.io/FoodA_pp/">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src={WeatherApp}
                    alt="project4"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Node Js</span>
                  <span className="card-detail-badge">Express</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      ForecastPro
                    </h5>
                  </div>
                  <p className="project-description">
                  Successfully integrated a public weather API for top 50 countries and location-specific forecasts.
      </p>
                  <a
                    className="ad-btn"
                    href="https://jaskaransingh1255.github.io/_Weather_App_/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={Quiz}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
               
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      MindMaze
                    </h5>
                  </div>
                  <p className="project-description">
                  Created a quiz platform enabling users to answer topic-specific questions and receive detailed results.
      </p>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={SimonGam}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                 
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                        Simon Game
                    </h5>
                  </div>
                  <p className="project-description">
                  Showcased advanced analytical abilities, leading to a 20% reduction in bugs during development.
      </p>
                  <a
                    className="ad-btn"
                    href="https://kartikg1809.github.io/Simon_Game/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;