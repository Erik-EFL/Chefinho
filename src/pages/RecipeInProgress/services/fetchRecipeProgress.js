export const fetchDataMeal = async (url) => {
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.meals[0]);
  return data;
};

export const fetchDataDrink = async (url) => {
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.drinks[0]);
  return data;
};
