import React from 'react';
import './Projects.css';
import projectCardData from '/src/data/projectCardData.js';
import ProjectCard from '/src/components/ProjectCard/ProjectCard.jsx';

export default function Projects() {
  return (
    <div className='projects-cards-container'>
      {projectCardData.map((project) => (
        <ProjectCard key={project.id} props={project} />
      ))}
    </div>
  );
}
