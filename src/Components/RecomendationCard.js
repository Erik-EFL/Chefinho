import PropTypes from 'prop-types';
import React from 'react';

export default function RecomendationCard({ image, name, index, type }) {
  return (
    <div data-testid={ `${index}-recomendation-card` }>
      <img
        src={ image }
        alt={ name }
        className="img-meal"
      />
      <p>{type}</p>
      <p>{name}</p>
    </div>
  );
}

RecomendationCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.string,
}.isRequired;
