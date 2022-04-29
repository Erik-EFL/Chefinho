import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Carousel from '../../Components/Carousel';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import { fetchRecomendationFoods } from '../../Service/FetchRecomendation';
import getFavorite from '../../Service/getFavorite';
import { setFavoriteDrink } from '../../Service/setFavorite';
import './DrinkDetails.css';

function DrinkDetails() {
  const history = useHistory();
  const idDrink = useParams().id;
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [recomendation, setRecomendation] = useState([]);
  const [copy, setCopy] = useState(false);
  const [renderFav, setRenderFav] = useState(false);

  // Função que faz o fetch para pegar os detalhes do Drink.
  const fetchDrinkDetails = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    const request = await fetch(url);
    const data = await request.json();
    setDrinkDetails(...data.drinks);
  };

  const fetchRecomentation = async () => {
    setRecomendation(await fetchRecomendationFoods());
  };

  const render = () => setRenderFav(getFavorite(idDrink));
  // Quando inicializar a pagina chama a função de fazer o fetch.
  useEffect(() => {
    fetchDrinkDetails();
    fetchRecomentation();
    render();
  }, []);

  // Pegar a key dos ingredients dentro do objeto;
  const ingredientsKeys = Object.keys(drinkDetails)
    .filter((key) => key.includes('Ingredient'));

  // Pegar a key dos Measure dentro do objeto;
  const measureKeys = Object.keys(drinkDetails)
    .filter((key) => key.includes('Measure'));

  // Faz um map para acessar os ingredients através da key e retorna eles, quando é vazio retorna false depois faz um filter e retorna só oque existe;
  const ingredients = ingredientsKeys.map((item) => {
    if (drinkDetails[item]) return drinkDetails[item];
    return false;
  }).filter((ingredient) => ingredient);

  // Mesmo processo dos ingredients
  const measures = measureKeys.map((item) => {
    if (drinkDetails[item]) return drinkDetails[item];
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
  const infos = recomendation.slice(0, magic);

  const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  let checkRecipe;
  if (getDoneRecipes) {
    checkRecipe = getDoneRecipes.filter((item) => item.id === idDrink);
  }

  const getInProgressRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let checkProgress;
  if (getInProgressRecipe) {
    checkProgress = getInProgressRecipe.cocktails[idDrink];
  }

  const buttonStartRecipe = (
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="start-recipe"
      onClick={ () => history.push(`/drinks/${idDrink}/in-progress`) }
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
        data-testid="recipe-photo"
        src={ drinkDetails.strDrinkThumb }
        alt={ drinkDetails.idDrink }
        className="imgDetails"
      />
      <h1 data-testid="recipe-title">{drinkDetails.strDrink}</h1>
      <p data-testid="recipe-category">{drinkDetails.strAlcoholic}</p>

      <button
        data-testid="share-btn"
        type="button"
        onClick={ copyLink }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      {copy && <p>Link copied!</p>}
      <button
        type="button"
        // Função setFavoriteDrink criada na pasta Service - favoritar ou desfavoritar um item */
        onClick={ () => setFavoriteDrink(drinkDetails, setRenderFav) }
      >
        <img
          data-testid="favorite-btn"
          src={ renderFav ? blackHeartIcon : whiteHeartIcon }
          alt="favoriteBtn"
        />
      </button>
      <div>
        {renderIngredients}
      </div>
      <p data-testid="instructions">{drinkDetails.strInstructions}</p>

      {infos.length > 0 && <Carousel info={ infos } />}
      {!checkRecipe && buttonStartRecipe}

    </div>
  );
}

export default DrinkDetails;
