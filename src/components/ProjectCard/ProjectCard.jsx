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
            <h3 className="title">{props.title}</h3>
            <p className="description">{props.description}</p>
          </div>
          <div className="tech-stack-container">
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