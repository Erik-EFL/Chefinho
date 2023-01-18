import React, { useEffect, useState } from 'react';
import CardExploreIngredients from '../../Components/CardExploreIngredients';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import { Box, BoxScroll } from '../../StyledComponents/Box';

export default function FoodsIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async () => {
    const mg = 12;
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const request = await fetch(url);
    const data = await request.json();
    const filterData = data.meals.filter((_i, index) => index < mg);
    setIngredients(filterData);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);
  return (
    <Box>
      <Header
        title="Ingredients"
        searchButton={ false }
      />
      <BoxScroll
        style={
          {
            marginTop: '10px',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px' }
        }
      >
        {ingredients.map((item, index) => (
          <CardExploreIngredients
            key={ index }
            name={ item.strIngredient }
            image={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
            index={ index }
            type="food"
          />
        ))}
      </BoxScroll>
      <MenuInferior />
    </Box>
  );
}
