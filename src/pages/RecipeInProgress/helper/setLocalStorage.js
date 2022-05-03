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
export const setLocalStorage = () => localStorage
  .setItem('inProgressRecipes', JSON.stringify(
    {
      cocktails: {},
      meals: {},
    },
  ));

export function reloadRecipe(type, setChecked, id) {
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('inProgressRecipes'));
  console.log('eu existo', verifyLocalStorage.meals[id]);
  if (type === 'foods' && verifyLocalStorage.meals[id]) {
    setChecked(verifyLocalStorage.meals[id]);
    console.log('setado', verifyLocalStorage);
  }
}

/* Fazer tudo de novo em vez de adicionar um novo. */
export function setRecipeInProgress(id, ingredient, type) {
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('inProgressRecipes'));

  // const nevo = localStorage.inProgressRecipes.meals;
  console.log('early', verifyLocalStorage.meals);
  if (verifyLocalStorage && type === 'foods') {
    console.log('late', verifyLocalStorage);
    const newObj = {
      meals: verifyLocalStorage.meals,
    };
    newObj.meals[id] = ingredient;
    localStorage
      .setItem('inProgressRecipes', JSON.stringify(
        newObj,
      ));
  } else if (verifyLocalStorage && type === 'drinks') {
    const newObj = {
      cocktails: verifyLocalStorage.cocktails,
    };
    newObj.cocktails[id] = ingredient;

    localStorage
      .setItem('inProgressRecipes', JSON.stringify(
        newObj,
      ));
  }
}
