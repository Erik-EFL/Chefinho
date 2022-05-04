import PropTypes from 'prop-types';
import React from 'react';
import './Carousel.css';
import RecommendationCard from './RecomendationCard';

export default function Carousel({ info }) {
  return (
    <div className="carousel-container">
      {info.map((item, index) => (
        <RecommendationCard
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
