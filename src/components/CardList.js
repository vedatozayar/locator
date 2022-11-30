import React from 'react';
import Card from './Card';
import './cardList.css';

const CardList = ({ data, distance }) => {
  function arrayToObject(distance) {
    return JSON.parse(JSON.stringify(distance));
  }
  const distanceArray = new arrayToObject(distance);
  data.map((hero, index) => {
    return (hero.distance = distanceArray[index]);
  });
  data.sort((a, b) => a.distance - b.distance);

  return (
    <div className='card-list'>
      <div className='card-list_container'>
        {data.map((hero) => {
          return <Card key={hero.id} id={hero.id} distance={hero.distance} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
