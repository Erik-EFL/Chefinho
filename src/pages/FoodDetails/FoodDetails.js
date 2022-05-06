/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SliderFoods from '../../Components/SliderFoods';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import { fetchRecommendationDrinks } from '../../Service/FetchRecommendation';
import getFavorite from '../../Service/getFavorite';
import { setFavoriteFood } from '../../Service/setFavorite';
import './FoodDetails.css';

export default function FoodDetails() {
  const history = useHistory();
  const idFood = useParams().id;

  const [foodDetails, setFoodDetails] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [copy, setCopy] = useState(false);
  const [renderFav, setRenderFav] = useState(false);
  // Função que faz o fetch para pegar os detalhes do Food.
  const fetchFoodDetails = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`;
    const request = await fetch(url);
    const data = await request.json();
    setFoodDetails(...data.meals);
  };

  const fetchRecommendation = async () => {
    setRecommendation(await fetchRecommendationDrinks());
  };

  const render = () => setRenderFav(getFavorite(idFood));
  // Quando inicializar a pagina chama a função de fazer o fetch.
  useEffect(() => {
    fetchFoodDetails();
    fetchRecommendation();
    render();
  }, []);

  // Pegar a key dos ingredients dentro do objeto;
  const ingredientsKeys = Object.keys(foodDetails)
    .filter((key) => key.includes('Ingredient'));

  // Pegar a key dos Measure dentro do objeto;
  const measureKeys = Object.keys(foodDetails)
    .filter((key) => key.includes('Measure'));

  // Faz um map para acessar os ingredients através da key e retorna eles, quando é vazio retorna false depois faz um filter e retorna só oque existe;
  const ingredients = ingredientsKeys.map((item) => {
    if (foodDetails[item]) return foodDetails[item];
    return false;
  }).filter((ingredient) => ingredient);

  // Mesmo processo dos ingredients
  const measures = measureKeys.map((item) => {
    if (foodDetails[item]) return foodDetails[item];
    return false;
  }).filter((measure) => measure);

  const renderIngredients = ingredients.map((item, index) => (
    <p
      data-testid={ `${index}-ingredient-name-and-measure` }
      key={ index }
    >
      {`- ${item} - ${measures[index]}`}
    </p>
  ));

  const magic = 6;
  const infos = recommendation.slice(0, magic);

  const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  let checkRecipe;
  if (getDoneRecipes) {
    checkRecipe = getDoneRecipes.filter((item) => item.id === idFood);
  }

  const getInProgressRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let checkProgress;
  if (getInProgressRecipe) {
    const check = Object.keys(getInProgressRecipe.meals)
      .filter((key) => key === idFood);
    checkProgress = check.length > 0;
  }

  const buttonStartRecipe = (
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="start-recipe"
      onClick={ () => history.push(`/foods/${idFood}/in-progress`) }
    >
      {checkProgress ? 'Continue Recipe' : 'Start Recipe'}

    </button>
  );
  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopy(true);
  };

  return (
    <div>
      <img
        style={ { width: '95%' } }
        data-testid="recipe-photo"
        src={ foodDetails.strMealThumb }
        alt={ foodDetails.idMeal }
      />
      <h1 data-testid="recipe-title">{foodDetails.strMeal}</h1>
      <button
        data-testid="share-btn"
        type="button"
        onClick={ copyLink }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      {copy && <span>Link copied!</span>}
      {/* Função setFavoriteFood criada na pasta Service - favoritar ou desfavoritar um item */}
      <button type="button" onClick={ () => setFavoriteFood(foodDetails, setRenderFav) }>
        <img
          data-testid="favorite-btn"
          src={ renderFav ? blackHeartIcon : whiteHeartIcon }
          alt="favoriteBtn"
        />
      </button>
      <p data-testid="recipe-category">{foodDetails.strCategory}</p>
      <div>
        {renderIngredients}
      </div>
      <p data-testid="instructions">{foodDetails.strInstructions}</p>

      <iframe
        style={ { width: '100%', height: '315px', marginBottom: '50px' } }
        data-testid="video"
        src={ foodDetails.strYoutube
          && foodDetails.strYoutube.replace('watch?v=', 'embed/') }
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
      {infos.length > 0 && <SliderFoods info={ infos } />}
      {!checkRecipe && buttonStartRecipe}
    </div>
  );
}
