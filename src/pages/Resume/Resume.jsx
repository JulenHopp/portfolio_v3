import React from 'react';
import './Resume.css';
import resumePDF from '/src/data/resume_JulenHoppenstedtMandiola.pdf';
import ResumeComponent from '/src/components/Resume/RusumeComponent.jsx';


export default function Resume() {
  return (
    <>
      <div className='pdf-container'>
        <ResumeComponent props={{resumePath: resumePDF}}/>
      </div>
    </>
  );
}