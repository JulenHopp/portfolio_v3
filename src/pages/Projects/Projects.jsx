import React from 'react';
import projectCardData from '/src/data/projectCardData.js';
import ProjectCard from '/src/components/ProjectCard/ProjectCard.jsx';

export default function Projects() {
  return (
    <>
      {projectCardData.map((project) => {
        return (<ProjectCard key={project.id} props={project} />)
      })}
    </>
  );
}