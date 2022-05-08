import PropTypes from 'prop-types';
import React from 'react';
import DivCard from '../StyledComponents/CardStyled';

function Cards({ image, name, index }) {
  return (
    <DivCard data-testid={ `${index}-recipe-card` }>
      <img
        src={ image }
        alt={ name }
        className="img-meal"
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </DivCard>
  );
}

Cards.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default Cards;
