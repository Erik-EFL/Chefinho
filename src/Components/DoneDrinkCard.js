import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DoneCards.css';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function DoneDrinkCard(props) {
  const [copy, setCopy] = useState(false);
  const {
    recipe,
    index,
  } = props;
  const {
    id,
    image,
    name,
    alcoholicOrNot,
    doneDate,
  } = recipe;

  const handleShareButton = () => {
    clipboardCopy(`http://localhost:3000/drinks/${id}`);
    setCopy(true);
  };

  return (
    <div>
      <Link
        to={ `/drinks/${id}` }
      >
        <img
          style={ {
            width: '30px',
            height: '30px',
          } }
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
      </Link>
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        { alcoholicOrNot }
      </p>
      <Link
        to={ `/drinks/${id}` }
      >
        <p
          data-testid={ `${index}-horizontal-name` }
        >
          { name }
        </p>
      </Link>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        { doneDate }
      </p>
      <div>
        <button
          type="button"
          className="share-button"
          onClick={ handleShareButton }
        >
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="Share icon."
          />
        </button>
        {copy && <p>Link copied!</p>}
      </div>
    </div>
  );
}

DoneDrinkCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  alcoholicOrNot: PropTypes.string,
  doneDate: PropTypes.string,
}.isRequired;

export default DoneDrinkCard;
