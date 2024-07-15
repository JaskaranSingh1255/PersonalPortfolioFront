import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Educations.css";

const Education = () => {
  return (
    <div className="education" id="education">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Education Details
      </h2>
      <hr />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2021 - 2025"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Technology - BTech, Electronics and Communication Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">
          National Institute Of Technology Delhi, IN
          </h4>
          <p>
            Grade: 7.03 CGPA<br />
            Pursuing Electronics and Communication Engineering at NIT Delhi, I've completed five semesters with a 7.54 CGPA. Proficient in Data Structures, Algorithms, OOP, DBMS, OS, and Computer Networks. Actively collaborating on projects with skilled developers, aiming to innovate and excel in technology.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2019 - 2020"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          
          <h4 className="vertical-timeline-element-subtitle">
          Kendriya Vidyalaya Sector 2 RK Puram, New Delhi
          </h4>
          <p>
            Grade: 96%<br />
            I completed my Class 12 high school education at Kendriya Vidyalaya Sector 2 RK Puram, New Delhi, under the Central Board of Secondary Education (CBSE) with a focus on science and mathematics.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2017 - 2018"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          
          <h4 className="vertical-timeline-element-subtitle">
          Kendriya Vidyalaya Sector 2 RK Puram, New Delhi
          </h4>
          <p>
            Grade: 94%<br />
            I completed my Class 10 high school education at Kendriya Vidyalaya Sector 2 RK Puram, New Delhi, under the Central Board of Secondary Education (CBSE) with a focus on science and mathematics.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
