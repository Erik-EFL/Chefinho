/* Seta os item no local storage conforme este modelo
inProgressRecipes {
    cocktails: {
        id-da-bebida: [lista-de-ingredientes-utilizados],
        ...
    },
    meals: {
        id-da-comida: [lista-de-ingredientes-utilizados],
        ...
    }
}
*/

/* Essa function esta sendo utilizada no Login para criar o
  LocalStorage
*/

const newObj2 = [{
  id: '',
  type: '',
  nationality: '',
  category: '',
  alcoholicOrNot: '',
  name: '',
  image: '',
  doneDate: 'feito',
  tags: '',
}];

export const setLocalStorage = () => localStorage
  .setItem('inProgressRecipes', JSON.stringify(
    {
      cocktails: {},
      meals: {},
    },
  ));

export function setDoneRecipeStorage() {
  if (!verifyLocalStorage) {
    localStorage.setItem('doneRecipes', JSON.stringify(
      newObj2,
    ));
  }
}

export function reloadRecipe(type, setChecked, id) {
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('inProgressRecipes'));
  if (type === 'foods' && verifyLocalStorage.meals[id]) {
    setChecked(verifyLocalStorage.meals[id]);
  } else {
    setChecked(verifyLocalStorage.cocktails[id]);
  }
}

/* Fazer tudo de novo em vez de adicionar um novo. */
export function setRecipeInProgress(id, ingredient, type) {
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('inProgressRecipes'));
  if (verifyLocalStorage && type === 'foods') {
    const newObj = {
      cocktails: verifyLocalStorage.cocktails,
      meals: verifyLocalStorage.meals,
    };
    newObj.meals[id] = ingredient;
    localStorage
      .setItem('inProgressRecipes', JSON.stringify(
        newObj,
      ));
  }

  if (verifyLocalStorage && type === 'drinks') {
    const newObj = {
      cocktails: verifyLocalStorage.cocktails,
      meals: verifyLocalStorage.meals,
    };
    newObj.cocktails[id] = ingredient;
    localStorage
      .setItem('inProgressRecipes', JSON.stringify(
        newObj,
      ));
  }
}

export function setDoneRecipe(id, ingredient, type) {
  console.log('setDoneRecipe', id);
  console.log('setDoneRecipe', ingredient);
  console.log('setDoneRecipe', type);
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('doneRecipes'));

  if (verifyLocalStorage && type === 'foods') {
    const newObjFood = [{
      id: [id],
      type: [type],
      nationality: ingredient.strArea,
      category: ingredient.strCategory,
      alcoholicOrNot: '',
      name: ingredient.strMeal,
      image: ingredient.strMealThumb,
      doneDate: 'feito',
      tags: ingredient.strTags,
    }];
    localStorage
      .setItem('doneRecipes', JSON.stringify(
        newObjFood,
      ));
  }

  if (verifyLocalStorage && type === 'drinks') {
    console.log('hello setDoneRecipe');
    const newObjDrink = [{
      id: [id],
      type: [type],
      nationality: ingredient.strArea,
      category: ingredient.strCategory,
      alcoholicOrNot: ingredient.strAlcoholic,
      name: ingredient.strDrink,
      image: ingredient.strDrinkThumb,
      doneDate: 'feito',
      tags: ingredient.strTags,
    }];
    newObj.cocktails[id] = ingredient;
    localStorage
      .setItem('doneRecipes', JSON.stringify(
        newObjDrink,
      ));
  }
}
