/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DoneDrinkCard from '../../Components/DoneDrinkCard';
import DoneFoodCard from '../../Components/DoneFoodCard';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import Button from '../../StyledComponents/Button';
// eslint-disable-next-line max-len
import { Box, BoxButton, BoxScroll } from '../../StyledComponents/Box';

export default function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState(
    [],
  );
  const [activeFilter, setActiveFilter] = useState('All');
  const store = JSON.parse(localStorage.getItem('doneRecipes'));

  useEffect(() => {
    if (store) {
      setDoneRecipes(store);
    }
  }, []);

  return (
    <Box>
      <Header
        title="Done Recipes"
        searchButton={ false }
      />
      <BoxButton>
        <Button
          type="button"
          data-testid="filter-by-all-btn"
          value="all"
          onClick={ ({ target }) => setActiveFilter(target.value) }
        >
          All
        </Button>
        <Button
          type="button"
          data-testid="filter-by-food-btn"
          value="drink"
          onClick={ ({ target }) => setActiveFilter(target.value) }
        >
          Food
        </Button>
        <Button
          type="button"
          data-testid="filter-by-drink-btn"
          value="food"
          onClick={ ({ target }) => setActiveFilter(target.value) }
        >
          Drinks
        </Button>
      </BoxButton>
      <BoxScroll>
        {
          doneRecipes.filter(
            (recipe) => recipe.type !== activeFilter,
          ).map(
            (recipe, index) => {
              if (recipe.type === 'food') {
                return (<DoneFoodCard
                  key={ index }
                  recipe={ recipe }
                  index={ index }
                />);
              }
              return (
                <DoneDrinkCard
                  key={ index }
                  recipe={ recipe }
                  index={ index }
                />
              );
            },
          )
        }
      </BoxScroll>
      <MenuInferior />
    </Box>
  );
}
