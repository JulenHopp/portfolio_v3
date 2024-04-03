import React from 'react';
import './HomeComponent.css';

export default function HomeComponent({props}) {
  return (
    <>
      <div className="presentation-data-container">
        <h1 className='presentation-name'>{props.title}</h1>
        <h2 className='presentation-short-description'>{props.shortDescription}</h2>
        <p className='presentation-description'>{props.description}</p>
      </div>
    </>
  )
}