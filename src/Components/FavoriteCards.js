import PropTypes from 'prop-types';
import React from 'react';

export default function FavoriteCards({ image, title }) {
  return (
    <div>
      <img src={ image } alt={ title } />
      <h2>{title}</h2>
    </div>
  );
}

FavoriteCards.propTypes = {
  info: PropTypes.array,
}.isRequired;
