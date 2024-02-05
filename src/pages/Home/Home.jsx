import  React from 'react';
import HomeData from '../../data/homeComponentData';
import HomeComponent from '../../components/Home/HomeComponent';

export default function Home() {
  return (
    <>
      <HomeComponent props={HomeData}/>
    </>
  );
}