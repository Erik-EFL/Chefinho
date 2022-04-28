import PropTypes from 'prop-types';
import React from 'react';
import './Carousel.css';
import RecomendationCard from './RecomendationCard';

export default function Carousel({ info }) {
  return (
    <div className="carousel-container">
      {info.map((item, index) => (
        <RecomendationCard
          key={ index }
          name={ item.strMeal }
          image={ item.strMealThumb }
          index={ index }
          type={ item.strArea }
        />
      ))}
    </div>
  );
}

Carousel.propTypes = {
  info: PropTypes.array,
}.isRequired;
