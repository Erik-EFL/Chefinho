const fetchCategories = async (type) => {
  const removeSecondWord = (objects) => objects.map((obj) => {
    const words = Object.values(obj)[0].split(' ');
    obj[Object.keys(obj)[0]] = words.length < 2
      ? Object.values(obj)[0] : words.slice(0, 1).join(' ');
    return obj;
  });

  let url = '';
  if (type === 'foods') {
    url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  } else if (type === 'drinks') {
    url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  }
  const request = await fetch(url);
  const data = await request.json();
  if (type === 'foods') {
    return removeSecondWord(data.meals);
  }
  return removeSecondWord(data.drinks);
};

export default fetchCategories;
