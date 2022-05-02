import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import fetchRandomFood from '../../Service/fetchRandomFood';

export default function ExploreFoods() {
  const history = useHistory();

  const handleSurprise = async () => {
    const randomFood = await fetchRandomFood();
    history.push(`/foods/${randomFood[0].idMeal}`);
  };

  return (
    <div>
      <Header
        title="Explore Foods"
        searchButton={ false }
      />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ handleSurprise }
        >
          Surprise me!
        </button>
      </div>
      <MenuInferior />
    </div>
  );
}
