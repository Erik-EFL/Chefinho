import PropTypes from 'prop-types';
import React from 'react';
import './Card.css';

function Cards({ image, name, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        src={ image }
        alt={ name }
        className="img-meal"
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default Cards;
