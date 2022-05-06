import PropTypes from 'prop-types';
import React from 'react';

export default function RecommendationCard({ image, name, index, type }) {
  return (
    <button
      type="button"
      data-testid={ `${index}-recommendation-card` }
      style={ { padding: '30px', margin: '30px' } }
    >
      <img
        className="carousel-img card-img-top"
        data-testid={ `${index}-carousel-img` }
        src={ image }
        alt={ name }
      />
      <h4
        className="card-title"
        data-testid={ `${index}-recommendation-title` }
      >
        {name}

      </h4>
      <p>{type}</p>
    </button>
  );
}

RecommendationCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
