import PropTypes from 'prop-types';
import React from 'react';
import './Carousel.css';
import RecommendationCard from './RecomendationCard';

export default function CarouselFoods({ info }) {
  return (
    <div className="carousel-container">
      {info.map((item, index) => (
        <RecommendationCard
          key={ index }
          name={ item.strDrink }
          image={ item.strDrinkThumb }
          index={ index }
          type={ item.strAlcoholic }
        />
      ))}
    </div>
  );
}

CarouselFoods.propTypes = {
  info: PropTypes.array,
}.isRequired;
