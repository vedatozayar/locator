import React from 'react';
import useHeroData from '../hooks/useHeroData';
import './card.css';

const Card = ({ id, distance }) => {
  const data = useHeroData({ id });

  return (
    <div className='card'>
      <div className='card-container'>
        <div className='image-container'>
          <img className='image' src={data.image} alt='alt' />
        </div>
        <div className='hero-content'>
          <h2 className='hero-name'>{data.name}</h2>
          <p className='hero-stats'>
            <span className='hero-stats_tag'>Species:</span> {data.species}
          </p>
          <p className='hero-stats'>
            <span className='hero-stats_tag'>Homeworld:</span>
            {data.homeworld || 'Unknown'}
          </p>
          <p className='hero-stats'>
            <span className='hero-stats_tag'>Height: </span> {data.height} m
          </p>
          <p className='hero-stats'>
            <span className='hero-stats_tag'>Mass:</span> {data.mass} kg
          </p>
          <p className='hero-stats'>
            <span className='hero-stats_tag'>Distance:</span>
            {Math.ceil(distance)} Km
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
