import PropTypes from 'prop-types';
import React from 'react';
import './Carousel.css';

export default function CarouselFoods({ info }) {
  return (
    <div className="carousel-container">
      {info.map((item, index) => (
        <recommendationCard
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
