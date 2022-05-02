import clipboardCopy from 'clipboard-copy';
import PropTypes, { object } from 'prop-types';
import React from 'react';
import blackHeart from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { setFavoriteDrink, setFavoriteFood } from '../Service/setFavorite';

export default function FavoriteCards({ image, title, index }) {
  const [copy, setCopy] = useState(false);

  const removeFavorite = () => {
    if (object.type === 'food') return setFavoriteFood(object, () => {});
    if (object.type === 'drink') return setFavoriteDrink(object, () => {});
  };

  const handleShareButton = () => {
    clipboardCopy(`http://localhost:3000/foods/${id}`);
    setCopy(true);
  };
  return (
    <div>
      <img src={ image } alt={ title } data-testid={ `${index}-horizontal-image` } />
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        {`${nationality} - ${category}`}
      </p>
      <h2 data-testid={ `${index}-horizontal-name` }>{title}</h2>
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
        <img src={ blackHeart } alt="blackHeart" />
      </button>
    </div>
  );
}

FavoriteCards.propTypes = {
  info: PropTypes.array,
}.isRequired;
