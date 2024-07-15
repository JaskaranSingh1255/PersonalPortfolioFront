import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./workExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="July 2024  - August 2024 "
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                It Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Food Safety and Standards Authority of India
              </h4>
              <p>
                <ul>
                  <li>
                  Developed and deployed a MERN stack application to streamline data management processes within the IT division at FSSAI.
                  </li>
                  <li>
                  Integrated MongoDB for efficient data storage and retrieval, ensuring scalability and performance.
                  </li>
                  <li>
                  Collaborated with team members to implement RESTful APIs using Express.js, facilitating seamless communication between frontend and backend systems.
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="June 2023 - August 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               Logic Soft-Beyond Hope
              </h4>
              <p>
                <ul>
                  <li>
                  Build Websites Using CRUD operations with angular,spring boot and PostGreSQL.
                  </li>
                  <li>
                  Build an impressive E-Commerce Website using angular CLI and json-server.
                  </li>
                  <li>
                  Implemented authentication and authorization features in Angular applications, ensuring secure access and user management.
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="June 2023  - June 2023 "
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                NIT Patna(Algorand foundation) 
              </h4>
              <p>
                <ul>
                  <li>
                  Interacted with DApps,smart contracts and NFTS as a part of Blockchain Technology write two more points regarding this
                  </li>
                  <li>
                  Developed and deployed smart contracts using Solidity on Ethereum, facilitating decentralized applications (DApps) with secure and transparent transaction handling.
                  </li>
                  <li>
                  Utilized Web3.js to integrate blockchain functionalities into web applications, enabling seamless interactions with NFTs and blockchain networks.
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;