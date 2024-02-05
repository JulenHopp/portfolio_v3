import React from 'react';
import './HomeComponent.css';

export default function HomeComponent({props}) {
  return (
    <>
      <div className="data-container">
        <h1 className='name'>{props.title}</h1>
        <h2 className='short-description'>{props.shortDescription}</h2>
        <p className='description'>{props.description}</p>
      </div>
    </>
  )
}