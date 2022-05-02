import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import fetchRandomDrink from '../../Service/fetchRandomDrink';

export default function ExploreDrinks() {
  const history = useHistory();

  const handleSurprise = async () => {
    const randomDrink = await fetchRandomDrink();
    history.push(`/drinks/${randomDrink[0].idDrink}`);
  };

  return (
    <div>
      <Header
        title="Explore Drinks"
        searchButton={ false }
      />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
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
