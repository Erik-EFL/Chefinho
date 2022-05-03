/* Seta os item no local storage conforme este modelo
{
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

/* export function setKeyLocalStorage() {
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('inProgressRecipes'));
  const newObj = {
    cocktails: {

    },
    meals: {

    },
  };
  if (!verifyLocalStorage) {
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(newObj));
  }
} */

/* Fazer tudo de novo em vez de adicionar um novo. */
export default function setRecipeInProgress(id, ingredient, type) {
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('inProgressRecipes'));

  if (verifyLocalStorage && type === 'drinks' && verifyLocalStorage.cocktails) {
    verifyLocalStorage.cocktails = {
      [id]: [...ingredient],
    };
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(verifyLocalStorage));
  }
  if (verifyLocalStorage && type === 'foods' && verifyLocalStorage.meals) {
    verifyLocalStorage.meals = {
      [id]: [...ingredient],
    };
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(verifyLocalStorage));
  }
}
