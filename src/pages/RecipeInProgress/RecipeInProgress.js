import React from 'react';
import { useParams } from 'react-router';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import ListIngredients from './components/ListIngredients';
import { fetchDataDrink } from './services/fetchRecipeProgress';

function RecipeInProgress() {
  const { id } = useParams();

  /* chamar a api aqui  */

  // const requestFood = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const requestDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  // const food = fetchDataMeal(requestFood);
  const drink = fetchDataDrink(requestDrink);
  console.log(fetchDataDrink(requestDrink));
  return (
    <div>
      <Header
        title="Recipe In Progress"
        searchButton={ false }
      />
      <img
        src=""
        alt=""
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        Ola
        {' '}
        {id}
      </h1>
      <button
        type="button"
        data-testid="share-btn"
      >
        Share
      </button>
      <button
        data-testid="favorite-btn"
        type="button"
      >
        Favorite
      </button>
      <h3 data-testid="recipe-category">Ola Ola</h3>

      <ListIngredients title={ drink.strDrink } />

      <div className="containerSteps">
        <h2>Instruction</h2>
        <p data-testid="instructions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti odit mollitia voluptate necessitatibus? Et, expedita
          soluta aut laborum repudiandae aliquam veritatis aperiam?
          Voluptatibus molestias corporis eius incidunt illum suscipit
          eos.
        </p>
      </div>
      <button
        data-testid="finish-recipe-btn"
        type="submit"
      >
        Finish Recipe
      </button>

      <MenuInferior />
    </div>
  );
}

export default RecipeInProgress;
