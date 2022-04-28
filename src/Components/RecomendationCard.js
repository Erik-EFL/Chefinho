import PropTypes from 'prop-types';
import React from 'react';

export default function RecomendationCard({ image, name, index, type }) {
  return (
    <div data-testid={ `${index}-recomendation-card` } className="div-item">
      <img
        src={ image }
        alt={ name }
        className="img-carousel"
      />
      <p>{type}</p>
      <p data-testid={ `${index}-recomendation-title` }>{name}</p>
    </div>
  );
}

RecomendationCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.string,
}.isRequired;
