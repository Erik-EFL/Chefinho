/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FavoriteBtn from '../../Components/Buttons/FavoriteBtn';
import ShareBtn from '../../Components/Buttons/ShareBtn';
import AppContext from '../../context/AppContext';
import ListIngredients from './components/ListIngredients';

function RecipeInProgress() {
  const { id } = useParams();
  const history = useHistory();
  const [progress, setProgress] = useState([]);
  const { handleChange, btnDisabled } = useContext(AppContext);
  // const [btnDisabled] = useState();
  const path = history.location.pathname;
  const type = path.includes('drinks') ? 'drinks' : 'foods';

  useEffect(() => {
    let url = '';
    if (type === 'foods') {
      url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    } else if (type === 'drinks') {
      url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (type === 'foods') {
          return setProgress(data.meals);
        }
        return setProgress(data.drinks);
      });
  }, []);

  useEffect(() => {
    handleChange();
  });

  // console.log('TBN', btnDisabled);

  return (
    <div>
      <main className="mainProgress">
        {progress && type === 'drinks'
          ? (
            progress.map((item) => (
              <div key={ item.idDrink }>
                <img
                  className="img-recipe"
                  src={ item.strDrinkThumb }
                  alt={ item.strDrink }
                  data-testid="recipe-photo"
                  style={ { width: '95%' } }
                />
                <h1 data-testid="recipe-title">
                  {item.strDrink}
                </h1>
                <div style={ { display: 'flex' } }>
                  <ShareBtn />
                  <FavoriteBtn id={ id } />
                </div>
                <h2 data-testid="recipe-category">{item.strCategory}</h2>
                <ListIngredients
                  progress={ progress }
                  id={ id }
                  type={ type }
                />
                <div className="containerSteps">
                  <h2>Instruction</h2>
                  <p data-testid="instructions">
                    {item.strInstructions}
                  </p>
                </div>
              </div>
            )))
          : (
            progress.map((item) => (
              <div key={ item.idMeal }>
                <img
                  className="img-recipe"
                  data-testid="recipe-photo"
                  src={ item.strMealThumb }
                  alt={ item.strMeal }
                  style={ { width: '95%' } }
                />
                <h1 data-testid="recipe-title">
                  {item.strMeal}
                </h1>
                <div style={ { display: 'flex' } }>
                  <ShareBtn />
                  <FavoriteBtn id={ id } />
                </div>
                <h2 data-testid="recipe-category">{item.strCategory}</h2>
                <ListIngredients
                  progress={ progress }
                  id={ id }
                  type={ type }
                />
                <div className="containerSteps">
                  <h2>Instruction</h2>
                  <p data-testid="instructions">
                    {item.strInstructions}
                  </p>
                </div>
              </div>
            ))
          )}
        <button
          data-testid="finish-recipe-btn"
          type="submit"
          disabled={ btnDisabled }
          onClick={ () => history.push('/done-recipes') }
        >
          Finish Recipe
        </button>
      </main>
    </div>
  );
}

export default RecipeInProgress;
