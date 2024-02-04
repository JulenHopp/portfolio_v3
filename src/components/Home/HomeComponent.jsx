import React from 'react';
import HomeData from '../../data/homeComponentData';
import './HomeComponent.css';

export default function HomeComponent() {
  return (
    <>
      <div className="data-container">
        <h1 className='name'>{HomeData.title}</h1>
        <h2 className='short-description'>{HomeData.shortDescription}</h2>
        <p className='description'>{HomeData.description}</p>
      </div>
    </>
  )
}