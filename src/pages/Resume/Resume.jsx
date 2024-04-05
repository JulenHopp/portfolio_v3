import React from 'react';
import resumePDF from '/src/data/resume_JulenHoppenstedtMandiola.pdf';


export default function Resume() {
  return (
    <>
      <div>
        <div>
          <iframe src="/src/data/resume_JulenHoppenstedtMandiola.pdf" width="100%" height="100%" title="Resume"/>
        </div>
      </div>
    </>
  );
}