/* eslint-disable react-hooks/exhaustive-deps */
import PropType from 'prop-types';
import React from 'react';
import '../assets/ListIngredients.css';

function ListIngredients(props) {
  const {
    progress,
  } = props;

  if (!progress.length) return null;

  /* função para marcar como checados os ingredientes */
  const lineThroughAddAndRemove = () => {
    const list = document.querySelectorAll('span.ingredients');
    const listItems = document.querySelectorAll('input[type=checkbox]');
    listItems.forEach((item, index) => {
      if (item.checked) {
        list[index].classList.add('checked');
      } else {
        list[index].classList.remove('checked');
      }
    });
  };

  const ingredientsKeys = Object.keys(progress[0])
    .filter((key) => key.includes('Ingredient'));

  // Pegar a key dos Measure dentro do objeto;
  const measureKeys = Object.keys(progress[0])
    .filter((key) => key.includes('Measure'));

  // Faz um map para acessar os ingredients através da key e retorna eles, quando é vazio retorna false depois faz um filter e retorna só oque existe;
  const ingredients = ingredientsKeys.map((item) => {
    if (progress[0][item]) return progress[0][item];
    return false;
  }).filter((ingredient) => ingredient);

  // Mesmo processo dos ingredients
  const measures = measureKeys.map((item) => {
    if (progress[0][item]) return progress[0][item];
    return false;
  }).filter((measure) => measure);

  const renderIngredients = ingredients.map((item, index) => (
    <li
      data-testid={ `${index}-ingredient-step` }
      key={ item }
    >
      <label htmlFor={ item }>
        <input
          type="checkbox"
          onClick={ lineThroughAddAndRemove }
          name={ item }
          id={ item }
        />
        <span className="ingredients">
          {measures[index] !== undefined
            ? ` - ${item} - ${measures[index]}` : ` - ${item}`}

        </span>
      </label>
    </li>
  ));

  return (
    <div className="containerIngredients">
      <h2>Ingredients</h2>
      <ul>
        {renderIngredients}
      </ul>
    </div>
  );
}

ListIngredients.propTypes = {
  progress: PropType.arrayOf(PropType.object).isRequired,
};

export default ListIngredients;
