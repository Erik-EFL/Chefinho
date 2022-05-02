import PropTypes from 'prop-types';
import React from 'react';

export default function recommendationCard({ image, name, index, type }) {
  return (
    <div data-testid={ `${index}-recommendation-card` } className="div-item">
      <img
        src={ image }
        alt={ name }
        className="img-carousel"
      />
      <p>{type}</p>
      <p data-testid={ `${index}-recommendation-title` }>{name}</p>
    </div>
  );
}

recommendationCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.string,
}.isRequired;
