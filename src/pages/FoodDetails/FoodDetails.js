import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecomendationCard from '../../Components/RecomendationCard';
import { fetchRecomendationDrinks } from '../../Service/FetchRecomendation';
import './FoodDetails.css';

export default function FoodDetails() {
  const history = useHistory();
  const idFood = history.location.pathname.split('/')[2];

  const [foodDetails, setFoodDetails] = useState([]);
  const [recomendation, setRecomendation] = useState([]);

  // Função que faz o fetch para pegar os detalhes do Food.
  const fetchFoodDetails = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`;
    const request = await fetch(url);
    const data = await request.json();
    setFoodDetails(...data.meals);
  };

  const fetchRecomentation = async () => {
    setRecomendation(await fetchRecomendationDrinks());
  };

  // Quando inicializar a pagina chama a função de fazer o fetch.
  useEffect(() => {
    fetchFoodDetails();
    fetchRecomentation();
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
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ foodDetails.strMealThumb }
        alt={ foodDetails.idMeal }
      />
      <h1 data-testid="recipe-title">{foodDetails.strMeal}</h1>
      <button data-testid="share-btn" type="button">Compartilhar</button>
      <button data-testid="favorite-btn" type="button">Favoritar</button>
      <p data-testid="recipe-category">{foodDetails.strCategory}</p>
      <div>
        {renderIngredients}
      </div>
      <p data-testid="instructions">{foodDetails.strInstructions}</p>

      <iframe
        width="560"
        height="315"
        data-testid="video"
        src={ foodDetails.strYoutube
          && foodDetails.strYoutube.replace('watch?v=', 'embed/') }
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
      {recomendation.slice(0, magic).map((item, index) => (
        <RecomendationCard
          key={ index }
          name={ item.strDrink }
          image={ item.strDrinkThumb }
          index={ index }
          type={ item.strAlcoholic }
        />
      ))}

      <button
        data-testid="start-recipe-btn"
        type="button"
        className="start-recipe"
      >
        Start Recipe

      </button>

    </div>
  );
}
