import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blackHeart from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

export default function FavoriteCards({ item, index, callback }) {
  const [copy, setCopy] = useState(false);
  const { name, id, type, category, nationality, alcoholicOrNot, image } = item;

  const removeFavorite = () => {
    const store = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newStore = store.filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStore));
    callback(name);
  };

  const handleShareButton = () => {
    clipboardCopy(`http://localhost:3000/foods/${id}`);
    setCopy(true);
  };
  const pathName = type === 'food' ? `/foods/${id}` : `/drinks/${id}`;
  return (
    <div>
      <Link to={ pathName }>
        <img
          style={ { width: '120px' } }
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        {type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
      </p>
      <Link to={ pathName }>
        <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
      </Link>
      <button
        type="button"
        onClick={ handleShareButton }
      >
        <img
          src={ shareIcon }
          alt="ShareBtn"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      {copy && <p>Link copied!</p>}
      <button type="button" onClick={ () => removeFavorite() }>
        <img
          src={ blackHeart }
          data-testid={ `${index}-horizontal-favorite-btn` }
          alt="blackHeart"
        />
      </button>
    </div>
  );
}

FavoriteCards.propTypes = {
  info: PropTypes.array,
}.isRequired;
