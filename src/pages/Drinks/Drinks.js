import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../Components/Cards';
import CategoryFilter from '../../Components/CategoryFilter';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import { Box, BoxScroll } from '../../StyledComponents/Box';
import AppContext from '../../context/AppContext';

export default function Drinks() {
  const { initialFetchs: { drinks } } = useContext(AppContext);
  const magicNumber = 12;
  const initialDrinks = drinks.filter((_i, index) => index < magicNumber);

  return (
    <Box>
      <Header
        title="Drinks"
        searchButton
      />

      <CategoryFilter
        type="drinks"
      />

      <BoxScroll>
        {initialDrinks.map((item, index) => (
          <Link
            key={ index }
            to={ `/drinks/${item.idDrink}` }
          >
            <Cards
              image={ item.strDrinkThumb }
              index={ index }
              name={ item.strDrink }
              type={ item.strAlcoholic }
            />
          </Link>
        ))}
      </BoxScroll>
      <MenuInferior />
    </Box>
  );
}
