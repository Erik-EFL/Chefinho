import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import fetchFilteredDrinks from '../Service/fetchFilteredDrinks';
import fetchFilteredFoods from '../Service/fetchFilteredFoods';

export default function CardExploreIngredients({ image, name, index, type }) {
  const { setFoods, setDrink } = useContext(AppContext);
  const history = useHistory();

  const handleClick = async () => {
    if (type === 'food') {
      await fetchFilteredFoods('ingredient', name).then((data) => {
        setFoods(data);
        history.push('/foods');
      });
    } else {
      const newSearch = await fetchFilteredDrinks('ingredient', name);
      setDrink(newSearch).then(() => history.push('/drinks'));
    }
  };

  return (
    <button
      type="button"
      data-testid={ `${index}-ingredient-card` }
      onClick={ handleClick }
    >
      <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
      <h4 data-testid={ `${index}-card-name` }>{name}</h4>
    </button>
  );
}

CardExploreIngredients.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.string,
}.isRequired;
