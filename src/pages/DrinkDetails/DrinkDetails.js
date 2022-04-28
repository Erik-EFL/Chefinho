import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecomendationCard from '../../Components/RecomendationCard';
import { fetchRecomendationFoods } from '../../Service/FetchRecomendation';

function DrinkDetails() {
  const history = useHistory();
  const idDrink = history.location.pathname.split('/')[2];
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [recomendation, setRecomendation] = useState([]);

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

  // Quando inicializar a pagina chama a função de fazer o fetch.
  useEffect(() => {
    fetchDrinkDetails();
    fetchRecomentation();
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
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ drinkDetails.strDrinkThumb }
        alt={ drinkDetails.idDrink }
      />
      <h1 data-testid="recipe-title">{drinkDetails.strDrink}</h1>
      <p data-testid="recipe-category">{drinkDetails.strAlcoholic}</p>

      <button data-testid="share-btn" type="button">Compartilhar</button>
      <button data-testid="favorite-btn" type="button">Favoritar</button>
      <div>
        {renderIngredients}
      </div>
      <p data-testid="instructions">{drinkDetails.strInstructions}</p>
      {recomendation.slice(0, magic).map((item, index) => (
        <RecomendationCard
          key={ index }
          name={ item.strMeal }
          image={ item.strMealThumb }
          index={ index }
          type={ item.strArea }
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

export default DrinkDetails;
