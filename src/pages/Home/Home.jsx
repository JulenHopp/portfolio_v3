import  React from 'react';
import HomeData from '/src/data/homeComponentData';
import HomeComponent from '/src/components/Home/HomeComponent';

export default function Home() {
  return (
    <>
      <HomeComponent props={HomeData}/>
    </>
  );
}