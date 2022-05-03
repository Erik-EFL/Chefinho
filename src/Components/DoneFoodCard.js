import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DoneCards.css';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function DoneFoodCard(props) {
  const [copy, setCopy] = useState(false);
  const {
    recipe,
    index,
  } = props;
  const {
    id,
    image,
    name,
    nationality,
    category,
    doneDate,
    tags,
  } = recipe;

  const handleShareButton = () => {
    clipboardCopy(`http://localhost:3000/foods/${id}`);
    setCopy(true);
  };

  return (
    <div>
      <Link
        to={ `/foods/${id}` }
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
        {`${nationality} - ${category}`}
      </p>
      <Link
        to={ `/foods/${id}` }
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
            alt="share icon."
          />
        </button>
        {copy && <p>Link copied!</p>}
      </div>
      {
        tags.map(
          (tag, indexTags) => (
            <p
              key={ indexTags }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>
          ),
        )
      }
    </div>
  );
}

DoneFoodCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  nationality: PropTypes.string,
  category: PropTypes.string,
  doneDate: PropTypes.string,
  tags: PropTypes.array,
}.isRequired;

export default DoneFoodCard;
