import PropTypes from 'prop-types';
import React from 'react';

function ListIngredients({ title }) {
  return (
    <div className="containerIngredients">
      <h2>Ingredients</h2>
      <ul>
        <li>
          <label htmlFor="ingredient">
            {title}
            <input
              type="checkbox"
              name={ title }
              id="ingredient"
              value={ title }
            />
          </label>
        </li>
      </ul>
    </div>
  );
}

ListIngredients.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ListIngredients;
