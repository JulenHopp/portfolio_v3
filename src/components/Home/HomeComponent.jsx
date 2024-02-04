import React from 'react';
import HomeData from '../../data/homeComponentData';
import './HomeComponent.css';

export default function HomeComponent() {
  return (
    <div className="home-container">
      <div className="data-container">
        <h1 className='name'>{HomeData.title}</h1>
        <h4 className='short-description'>{HomeData.shortDescription}</h4>
        <p className='description'>{HomeData.description}</p>
      </div>
    </div>
  )
}