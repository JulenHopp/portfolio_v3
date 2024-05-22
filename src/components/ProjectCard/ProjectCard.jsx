import React from "react";
import LinkedButton from "./LinkedButton";
import "./ProjectCard.css";

export default function ProjectCard({props}) {
  return (
    <>
      <div className="project-card-container">
        <div className="image-container">
          <img src={props.image} alt={props.title} className="project-image"/>
        </div>
        <div className="info-container">
          <div className="title-description-container">
            <h2 className="title">{props.title}</h2>
            <p className="description">{props.description}</p>
          </div>
          <div className="tech-stack-container">
            {/* <h3>Tech Tools: {props.tools.map((tool) => (<span>{tool}</span>)) }</h3> */}
            {props.tools.map((tool) => (<span className="technology">{tool}</span>))}
          </div>
          <div className="links-container">
            {props.links.map((link) => (<LinkedButton props={link}/>)) }
          </div>
        </div>
      </div>
    </>
  );
}