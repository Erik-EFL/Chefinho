import PropTypes from 'prop-types';
import React from 'react';
import './Carousel.css';

export default function Carousel({ info }) {
  return (
    <div className="carousel-container">
      {info.map((item, index) => (
        <recommendationCard
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
