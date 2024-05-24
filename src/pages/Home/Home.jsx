import  React from 'react';
import './Home.css';
import HomeData from '/src/data/homeComponentData';
import HomeComponent from '/src/components/Home/HomeComponent';

export default function Home() {
  return (
    <div className='home-container'>
      <HomeComponent props={HomeData}/>
    </div>
  );
}