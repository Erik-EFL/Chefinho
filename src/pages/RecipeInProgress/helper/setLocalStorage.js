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
  if (type === 'foods' && verifyLocalStorage.meals[id]) {
    setChecked(verifyLocalStorage.meals[id]);
  } else {
    setChecked(verifyLocalStorage.cocktails[id]);
  }
}

/* Fazer tudo de novo em vez de adicionar um novo. */
export function setRecipeInProgress(id, ingredient, type) {
/*   console.log('id', id);
  console.log('ingredient', ingredient);
  console.log('type', type); */
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
